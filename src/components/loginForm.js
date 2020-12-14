import { Modal, Form, Input, Card , Button, Checkbox , Row , Col, Divider, InputNumber } from 'antd';
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
    const { setloginModal, loginModal, setsignUpModal, setrender} = props

    const onFinish = (values) => {
      // console.log(values.phoneNumber)
      setrender(values.phoneNumber)
  };

const showSignUpForm = () => {
    setsignUpModal(true)
    setloginModal(false)
    console.log("yes called")
  }
  const handleOk = () => {
    setloginModal(false);
  };
  
  const handleCancel = () => {
    setloginModal(false);
  };

  return (
    <>
      <Modal visible={loginModal} onCancel={handleCancel} onOk={handleOk} footer={null} closable={false}>
            <Divider orientation="center">Login Form</Divider>
            <Form {...layout}  name="basic" initialValues={{remember: false, }} onFinish={onFinish} >
                <Form.Item  label="Phone Number" name="phoneNumber" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                    <InputNumber style={{width: '100%'}} />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', }, ]} >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}> 
                <Button type="primary" htmlType="submit"> Sign In </Button>
                </Form.Item>
                <Form.Item {...tailLayout2}> 
                <label>Don't have an Account ? </label>
                <Button type="link" onClick={showSignUpForm}> Sign Up </Button>
                </Form.Item>
            </Form>
      </Modal>
    </>
  );
}

export const SignUpForm = (props) => {
    const { setsignUpModal, signUpModal} = props

    const onFinish = (values) => {
      console.log(values)

  };

  const onFinishFailed = (errorInfo) => {
  };

  const handleOk = () => {
    setsignUpModal(false);
  };

  const handleCancel = () => {
    setsignUpModal(false);
  };

  return (
    <>
      <Modal visible={signUpModal} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
            <Divider orientation="center">Create Free Account</Divider>
            <Form {...layout}  name="basic" initialValues={{remember: true, }} onFinish={onFinish}  onFinishFailed={onFinishFailed} >
                <Form.Item  label="Phone Number" name="phoneNumber" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                    <InputNumber style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item  label="username" name="username" rules={[{required: true, message: 'Please input your Username', }, ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required : true , type : 'email' , message : 'Email Required!'}]} hasFeedback>
                    <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', }, ]} >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}> 
                <Button type="primary" htmlType="submit" > Sign Up </Button>
                </Form.Item>
            </Form>
      </Modal>
    </>
  );
}