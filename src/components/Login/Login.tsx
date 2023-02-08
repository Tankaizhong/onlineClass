import React from "react";
import "./Login.less";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router";
export default function Logandregister() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="login-form"
        className="login-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="用户名"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="密码"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember-me"
          valuePropName="checked"
          className="remenber-me"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            注册
          </Button>

          <a className="to-registe" onClick={() => navigate("/register")}>
            没有账号?立即注册
          </a>
        </Form.Item>
      </Form>
    </div>
  );
}
