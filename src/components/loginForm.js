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
    const { setIsModalVisible, isModalVisible, setIsModal2Visible} = props

    const onFinish = (values) => {
  };

const showSignUpForm = () => {
    setIsModalVisible(false);
    setIsModal2Visible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal visible={isModalVisible} onCancel={handleCancel} onOk={handleOk} footer={null} closable={false}>
        <Card title="Fill The Form To Login" style={{marginTop : 50, border :'none'}}>
            <Form {...layout}  name="basic" initialValues={{remember: false, }} onFinish={onFinish} >
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
                <Button type="link" onClick={showSignUpForm}> Sign Up </Button>
                </Form.Item>
            </Form>
        </Card>
      </Modal>
    </>
  );
}

export const SignUpForm = (props) => {
    const { setIsModal2Visible, isModal2Visible} = props

    const onFinish = (values) => {

  };

  const onFinishFailed = (errorInfo) => {
  };

  const handleOk = () => {
    setIsModal2Visible(false);
  };

  const handleCancel = () => {
    setIsModal2Visible(false);
  };

  return (
    <>
      <Modal visible={isModal2Visible} onOk={handleOk} onCancel={handleCancel} footer={null} closable={false}>
        <Card title="Create Free Account" style={{marginTop : 50, textAlign: 'center', border :'none'}}>
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
                <Button type="primary" htmlType="submit" > Sign Up </Button>
                </Form.Item>
            </Form>
        </Card>
      </Modal>
    </>
  );
}