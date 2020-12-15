import React, { } from 'react'
import { Card, Space, Image , Divider, Avatar, Typography, Button, Row, Col} from 'antd'
import { UserOutlined, WhatsAppOutlined, MailOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';
import ReactWhatsapp from 'react-whatsapp';
import EmailShare from 'react-email-share-link'
import PhoneNumber from 'react-phone-number';

export const ProductDetails = (props) => {

    const createCall = () => {
        // const url = 'tel:+255717963697'
        // Linking.canopenURL(url)
    }

    const rowStyle = { marginTop : 12 ,  }
    const colStyle = { fontWeight : 'bold' , textAlign: 'left' }
    const colStyle2 = { textAlign: 'left' }
    const { product } = props
    const { Title} = Typography
    return (<>
    <Row>
    <Col xs={24}>
        {/* <Space size={150}> */}
        <Row>
        <Col xs={24} lg={10}>
             <Card title="Images" style={{width: '100%', height:640, textAlign: 'center', padding:20}}>
                <Image  alt="example" width={'100%'} height={400} src={product.url} />
                <Divider />
                {/* <Space> */}
                    <Image  alt="example" width={'20%'} height={70} src={product.url} preview={false}/>
                    <Image  alt="example" width={'20%'} height={70} src={product.url} preview={false}/>
                    <Image  alt="example" width={'20%'} height={70} src={product.url} preview={false}/>
                    <Image  alt="example" width={'20%'} height={70} src={product.url} preview={false}/>
                {/* </Space> */}
            </Card>
            </Col> &nbsp;
            <Col xs={24} lg={{span:8, offset: 4}}>
            <Card title="Seller Contacts" style={{width: '100%', textAlign: 'center'}}>
                <Avatar size={64} icon={<UserOutlined />} /> 
                <Title level={5} >MWAMEDI MUDDY</Title>
                <Divider />
                {/* <Space direction="vertical" size={30}> */}
                    <ReactWhatsapp number="+255717963697" style={{width: '90%', }}> <WhatsAppOutlined /> WhatsApp </ReactWhatsapp> <br /> <br />
                    <Button style={{width: '90%'}} > 
                        <EmailShare email="timotheomhoja@gmail.com" subject="" body="Your message">
                        {link => ( <a href={link} data-rel="external"> <MailOutlined /> Email</a> )}
                        </EmailShare>
                     </Button>  <br /> <br />
                    <a href="tel:+255717963697">
                    <Button style={{width: '90%'}} > <PhoneOutlined />  Phone</Button>
                    </a>  <br /> <br />
                    <a href="sms:+255717963697">
                    <Button style={{width: '90%'}}> <MessageOutlined />  SMS </Button>
                    </a>
                {/* </Space> */}
            </Card>
            </Col>
        </Row>
        {/* </Space>  */}
        <Card title="Product Details" style={{width:'99%', marginTop: 30, textAlign: 'center'}}>
            <Row style={rowStyle}>
            <Col xs={24} lg={12} >
                    <Row style={rowStyle}>
                        <Col xs={10} lg={4} style={colStyle}> Name : </Col>
                        <Col xs={12} lg={4} style={colStyle2} >{product.name}</Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col xs={14} lg={4}style={colStyle}> Price :Tsh </Col>
                        <Col xs={10} lg={4} style={colStyle2} >{product.price} </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col xs={14} lg={4}style={colStyle}> Category : </Col>
                        <Col xs={10} lg={4}style={colStyle2} >{product.category}</Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col xs={12} lg={4} style={colStyle}> Location : </Col>
                        <Col xs={10} lg={4} style={colStyle2} >{product.location}</Col>
                    </Row>
                </Col>
                <Col  xs={24} lg={12}>
                    <Divider orientation="center"> Description </Divider>
                    <p>Description Goes Here!.</p>
                </Col>
                </Row>
        </Card>
        </Col>
        </Row>
        </>
    )
}
