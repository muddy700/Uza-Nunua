import { Modal, Form, Input, Card , Button, Checkbox , Row , Col } from 'antd';
import React , { useState } from 'react'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const tailLayout2 = {
  wrapperCol: {
    offset: 8,
    span: 20,
  },
};


export const LoginForm = (props) => {
    const { setIsModalVisible, isModalVisible} = props

    const onFinish = (values) => {
    // console.log(values)
    // setisValid(true)
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };



  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <Card title="Fill The Form" style={{marginTop : 50}}>
            <Form {...layout}  name="basic" initialValues={{remember: true, }} onFinish={onFinish}  onFinishFailed={onFinishFailed} >
                <Form.Item  label="Phone Number" name="phoneNumber" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', }, ]} >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}> 
                <Button type="primary" htmlType="submit" > Sign In </Button>
                </Form.Item>
                <Form.Item {...tailLayout2}> 
                <label>Don't have an Account ? </label>
                <Button type="link" > Sign Up </Button>
                </Form.Item>
            </Form>
        </Card>
      </Modal>
    </>
  );
}

export const SignUpForm = (props) => {
    const { setIsModalVisible, isModalVisible} = props

    const onFinish = (values) => {

  };

  const onFinishFailed = (errorInfo) => {
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <Card title="Fill The Form" style={{marginTop : 50}}>
            <Form {...layout}  name="basic" initialValues={{remember: true, }} onFinish={onFinish}  onFinishFailed={onFinishFailed} >
                <Form.Item  label="Phone Number" name="phoneNumber" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                    <Input />
                </Form.Item>
                <Form.Item  label="username" name="username" rules={[{required: true, message: 'Please input your Username', }, ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', }, ]} >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}> 
                <Button type="primary" htmlType="submit" > Sign UP </Button>
                </Form.Item>
            </Form>
        </Card>
      </Modal>
    </>
  );
}