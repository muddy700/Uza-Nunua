import {DesktopOutlined, PieChartOutlined, FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Typography , Layout , Menu , Breadcrumb, Input, Button, Space, Card, Row, Col } from 'antd'
import React, { useState, } from 'react'
import { ProductCard } from './productCard'

export const Container = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography

    const [collapsed, setcollapsed] = useState(false)

    const toggle = () => {
        setcollapsed(!collapsed)
    }
    const searchData = () => {

    }

    const toggleButton = collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> :
     <MenuFoldOutlined className="trigger"  onClick={toggle} />

    return (
        // <div>
            <Layout style={{height : 800}}>
                <Sider style={{backgroundColor : 'lightblue'}} trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" >{collapsed? "UZA \n NUNUA" : ''}</div>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PieChartOutlined />}>
                        Option 1
                        </Menu.Item>
                        <Menu.Item key="5" icon={<DesktopOutlined />}>
                        Option 2
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FileOutlined />}>
                        Files
                        </Menu.Item>
                        <Menu.Item key="7" icon={<FileOutlined />}>
                        Files
                        </Menu.Item>
                        <Menu.Item key="8" icon={<FileOutlined />}>
                        Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor: 'lightgray', height: 110, display: 'flex', padding: 30, position: 'fixed',  zIndex: 1, width: '100%'}}>
                        {toggleButton   }
                        <Input placeholder="Search" onChange={searchData} style={{width : 600, marginLeft : 100, height : 50}}/>
                        <Button type="primary" style={{height : 50, width : 100, marginLeft : 400}}>Uza</Button>
                    </Header>
                    <Content style={{backgroundColor : 'gray'}}>
                        <Card style={{padding : 30, position: 'absolute'}}>
                        {/* <Space style={{padding : 30}} size={[30, 10]} wrap> */}
                        <Row gutter={[1, 32]} style={{paddingTop: 110}}>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                            <Col className="gutter-row" span={6}> <ProductCard />  </Col>
                        {/* </Space> */}
                        </Row>
                        </Card>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        // </div>
    )
}

