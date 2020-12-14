import React from 'react'
import { Card, Space, Image , Divider, Avatar, Typography, Button, Row, Col} from 'antd'
import { UserOutlined, WhatsAppOutlined, MailOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';


export const ProductDetails = (props) => {

    const rowStyle = { marginTop : 12 ,  }
    const colStyle = { fontWeight : 'bold' , textAlign: 'left' }
    const colStyle2 = { textAlign: 'left' }
    const { product } = props
    const { Title} = Typography
    return (<>
        <Space size={150}>
            <Card title="Product Images" style={{width: 700, height:640, textAlign: 'center', padding:20}}>
                <Image  alt="example" width={600} height={400} src={product.url} />
                <Divider />
                <Space size={20}>
                    <Image  alt="example" width={70} height={70} src={product.url} preview={false}/>
                    <Image  alt="example" width={70} height={70} src={product.url} preview={false}/>
                    <Image  alt="example" width={70} height={70} src={product.url} preview={false}/>
                    <Image  alt="example" width={70} height={70} src={product.url} preview={false}/>
                </Space>
            </Card>
            <Card title="Seller Contacts" style={{width: 400, height: 640, float:'right', textAlign: 'center'}}>
                <Avatar size={64} icon={<UserOutlined />} /> 
                <Title level={5} >MWAMEDI MUDDY</Title>
                <Divider />
                <Space direction="vertical" size={30}>
                    <Button style={{width: 250}}> <WhatsAppOutlined />  WhatsApp </Button>
                    <Button style={{width: 250}}> <MailOutlined />  Email </Button>
                    <Button style={{width: 250}}> <PhoneOutlined />  Phone </Button>
                    <Button style={{width: 250}}> <MessageOutlined />  SMS </Button>
                </Space>
            </Card>
        </Space> 
        <Card title="Product Details" style={{width:'99%', height: 300, marginTop: 30, textAlign: 'center'}}>
            <Row style={rowStyle}>
            <Col span={12}>
                    <Row style={rowStyle}>
                        <Col span={4} style={colStyle}> Name : </Col>
                        <Col span={4} style={colStyle2} >{product.name}</Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col span={4} style={colStyle}> Price : TSH </Col>
                        <Col span={4} style={colStyle2} >{product.price} /=</Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col span={4} style={colStyle}> Category : </Col>
                        <Col span={4} style={colStyle2} >{product.category}</Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col span={4} style={colStyle}> Location : </Col>
                        <Col span={4} style={colStyle2} >{product.location}</Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Divider orientation="center"> Description </Divider>
                    <p>Description Goes Here!.</p>
                </Col>
                </Row>
        </Card>

        </>
    )
}
