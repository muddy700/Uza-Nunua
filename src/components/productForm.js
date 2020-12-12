import { Modal, Form, Input, Card , Button, Checkbox , Row , Col, Upload, Select, Divider, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import React , { useState } from 'react'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const ProductForm = (props) => {
  const {TextArea } = Input
    const { setIsModalVisible, isModalVisible } = props
    const productTypes = [
      {id : 1, name : 'Electronic'},
      {id : 1, name : 'Electronic'},
    ]
    const fileList = []
    const options = productTypes.map((data) =>{
      return(
        <Select.Option key={data.id} value={data.name}> {data.name} </Select.Option>
      )
    })

    const onFinish = (values) => {
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal visible={isModalVisible} onCancel={handleCancel} onOk={handleOk} footer={null} closable={false} width={900}>
            <Divider orientation="center">Fill Product Details</Divider>
            <Form {...layout}  name="basic" initialValues={{remember: false, }} onFinish={onFinish} >
              <Row>
                <Col span={12}>
                <Form.Item  label="Product Name" name="" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Product Type" name="k" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                  <Select placeholder = "---Select Option---" > {options} </Select>
                </Form.Item>
                <Form.Item label="Product Type" name="" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                  <Select placeholder = "---Select Option---" > {options} </Select>
                </Form.Item>
                <Form.Item label="Product Type" name="" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                  <Select placeholder = "---Select Option---" > {options} </Select>
                </Form.Item>
                <Form.Item label="Product Type" name="h" rules={[{required: true, message: 'Please input your Phone Number!', }, ]}>
                  <Select placeholder = "---Select Option---" > {options} </Select>
                </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item  label="Description" name="" rules={[{required: true, message: 'Price Can not be blank!', }, ]}>
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item  label="Price" name="" rules={[{required: true, message: 'Price Can not be blank!', }, ]} >
                    <InputNumber style={{width: '100%'}} />
                </Form.Item>
                <Form.Item  label="Images" name="pic" rules={[{required: true, message: 'Price Can not be blank!', }, ]} >
                     <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture" defaultFileList={[...fileList]} multiple >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                </Form.Item>
                <Form.Item style={{float: 'right'}}> 
                <Button type="primary" htmlType="submit" >Post</Button>
                </Form.Item>
                </Col>
              </Row>
            </Form>
      </Modal>
    </>
  );
}