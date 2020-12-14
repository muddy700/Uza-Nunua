import React from 'react'
import { Space, Card, Row, Col} from 'antd'

export const PageFooter = () => {
    const Style = {width: '100%', height: 200, textAlign: 'center', backgroundColor: 'gray', border: 'none'}
    return (
        <Row>
        {/* <Space size={25} style={{padding:30}}> */}
          <Col xs={24} lg={8}>  <Card title="About Us" style={Style}></Card> </Col>
          <Col xs={24} lg={8}>   <Card title="Contact Us" style={Style}></Card> </Col>
          <Col xs={24} lg={8}>   <Card title="Follow Us" style={Style}></Card> </Col>
        {/* </Space> */}
        </Row>
    )
}
