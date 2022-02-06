import React, { Component } from "react";
import { Form, Button, Input, Row, Col, message, Drawer } from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";

export class EditProfile extends Component {
  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {
    const { data, visible, close } = this.props;
    const onFinish = (values) => {
      const key = "updatable";
      message.loading({ content: "Updating...", key });

      setTimeout(() => {
        message.success({ content: "Done!", key, duration: 2 });
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const saveChange = () => {
      setTimeout(() => {
        close();
      }, 1000);
    };

    return (
      <Drawer
        width={615}
        placement="right"
        onClose={close}
        closable={false}
        visible={visible}
      >
        <Flex
          alignItems="center"
          mobileFlex={false}
          className="text-center text-md-left"
        ></Flex>
        <div className="mt-4">
          <Form
            name="basicInformation"
            layout="vertical"
            initialValues={
              data
                ? {
                    name: data.name,
                    email: data.email,
                    username: data.username,
                    phoneNumber: data?.phone,
                    website: data.website,
                    address: data.address.street,
                    city: data.address.city,
                    zipcode: data.address.zipcode,
                  }
                : {
                    name: "",
                    email: "",
                    username: "",
                    phoneNumber: "",
                    website: "",
                    address: "",
                    city: "",
                    zipcode: "",
                  }
            }
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input value={data ? data.name : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input value={data ? data.username : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      rules={[
                        {
                          required: true,
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input value={data ? data.email : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number">
                      <Input value={data ? data.phone : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website">
                      <Input value={data ? data.website : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Address">
                      <Input value={data ? data.address.street : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City">
                      <Input value={data ? data.address.city : ""} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Zip code">
                      <Input value={data ? data.address.zipcode : ""} />
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary" htmlType="submit" onClick={saveChange}>
                  Save Change
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Drawer>
    );
  }
}

export default EditProfile;
