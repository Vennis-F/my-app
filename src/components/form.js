import { Button, Form, Input, message, Alert } from "antd"
import React, { useState } from "react"

const FormTest = () => {
  const [showAlert, setShowAlert] = useState(false)
  const onFinish = (data) => {
    // API call
    console.log(data)

    //Sucess message
    message.loading({
      content: (
        <h1>
          <a href="https://www.google.com">Loading...</a>
        </h1>
      ),
      duration: 4,
      key: "updatable",
    })

    setTimeout(() => {
      console.log(showAlert)
      setShowAlert(true)
      console.log(showAlert)
      // message.success({
      //   content: "Login Sucess",
      //   duration: 2,
      //   key: "updatable",
      // })
      // message.error({
      //   content: "Login Failed!",
      //   duration: 2,
      //   key: "updatable",
      // })
      // message.warning({
      //   content: "Login Failed!",
      //   duration: 2,
      //   key: "updatable",
      // })
    }, 2000)
  }
  const onFinishFailed = (data, errField) => {
    console.log(data)
    console.log(errField)
  }
  return (
    <div>
      {showAlert && (
        <Alert
          type="success"
          closable
          showIcon
          message="Sucess Text"
          description="Success Description Success Description Success Description"
        />
      )}
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="User name" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormTest
