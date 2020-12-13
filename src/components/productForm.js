import { Modal, Form, Input, Card , Button, Checkbox , Row , Col, Upload, Select, message,   Divider, InputNumber } from 'antd';
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
    const { setproductModal, productModal, categories, conditions, setProducts } = props
    const selections = [
      {id : 1, name : 'Yes'},
      {id : 2, name : 'No'},
    ]
    const locations = [
        {id: 1, name: 'CHS'},
        {id: 2, name: 'CIVE'},
        {id: 3, name: 'COED'},
        {id: 4, name: 'COES'},
        {id: 5, name: 'CBSL'},
        {id: 6, name: 'SOCIAL'},
        {id: 7, name: 'HUMANITIIES'},
    ]
    const fileList = []
    const options = selections.map((data) =>{
      return( <Select.Option key={data.id} value={data.name}> {data.name} </Select.Option> ) })
    const categs = categories.map((cat) =>{
      return( <Select.Option key={cat.id} value={cat.name}> {cat.name} </Select.Option> ) })
    const conds = conditions.map((condition) =>{
      return( <Select.Option key={condition.id} value={condition.status}> {condition.status} </Select.Option> ) })
    const locs = locations.map((location) =>{
      return( <Select.Option key={location.id} value={location.name}> {location.name} </Select.Option> ) })

    const onFinish = (values) => {
      console.log(values)
      message.success('Product Added Successful.')
      setproductModal(false)
      //append The New Product In SetProducts
      //Call UseEffect When Products.length Has Changed
      
  };

  const handleOk = () => {
    setproductModal(false);
  };
  
  const handleCancel = () => {
    setproductModal(false);
  };

  return (
    <>
      <Modal visible={productModal} onCancel={handleCancel} onOk={handleOk} footer={null} closable={false} width={900}>
            <Divider orientation="center">Fill Product Details</Divider>
            <Form {...layout}  name="basic" initialValues={{remember: false, }} onFinish={onFinish} >
              <Row>
                <Col span={12}>
                <Form.Item  label="Product Name" name="productName" rules={[{required: true, message: 'Product Name Required!', }, ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Product Type" name="ProductType" rules={[{required: true, message: 'Product Type Required!', }, ]}>
                  <Select placeholder = "---Select Option---" > {categs} </Select>
                </Form.Item>
                <Form.Item label="Product Condition" name="condition" rules={[{required: true, message: 'Please Select product Condition!', }, ]}>
                  <Select placeholder = "---Select Option---" > {conds} </Select>
                </Form.Item>
                <Form.Item label="Negotiatable" name="negotiatable" rules={[{required: true, message: 'Please Select Option!', }, ]}>
                  <Select placeholder = "---Select Option---" > {options} </Select>
                </Form.Item>
                <Form.Item label="Delivery Offer" name="offer" rules={[{required: true, message: 'Please Select Option!', }, ]}>
                  <Select placeholder = "---Select Option---" > {options} </Select>
                </Form.Item>
                <Form.Item label="Location" name="location" rules={[{required: true, message: 'Please Select Option!', }, ]}>
                  <Select placeholder = "---Select Option---" > {locs} </Select>
                </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item  label="Description" name="description" rules={[{required: true, message: 'Description Can not be blank!', }, ]}>
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item  label="Price" name="price" rules={[{required: true, message: 'Price Can not be blank!', }, ]} >
                    <InputNumber style={{width: '100%'}} />
                </Form.Item>
                <Form.Item  label="Images" name="images" rules={[{required: true, message: 'Please Upload Product Image!', }, ]} >
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