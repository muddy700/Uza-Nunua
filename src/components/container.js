import {DesktopOutlined, PieChartOutlined, FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Typography , Layout , Menu , Breadcrumb, Input, Button, Space, Card, Row, Col } from 'antd'
import React, { useState, } from 'react'
import { ProductCard } from './productCard'
import { PageFooter } from './footer'
import { ProductDetails } from './productDetails'
import { LoginForm} from './loginForm'


export const Container = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography

    const initialProducts = [ ]
    for (let i = 0; i < 20; i++){
        initialProducts.push({name : 'Laptop', id : i, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})
    }

    const [collapsed, setcollapsed] = useState(false)
    const [products, setproducts] = useState(initialProducts)
    const [showInfo, setshowInfo] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false);


    const productsList =  <Row gutter={[0, 24]} >
                            { products.map((data) => {return <Col  span={6} key={data.id}> <ProductCard setshowInfo={setshowInfo} product={data} />  </Col>})}
                        </Row>
    const productInfo = <ProductDetails />
    // const modo =  isModalVisible ? <LoginForm /> : null

    const toggle = () => {
        setcollapsed(!collapsed)
    }

    const searchData = () => {

    }
    const showModal = () => {
          setIsModalVisible(true);
      };

    const toggleButton = collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> :
     <MenuFoldOutlined className="trigger"  onClick={toggle} />

    return (<>
            <Layout >
                <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" >{collapsed? "UZA \n NUNUA" : ''}</div>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />} >
                        Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                        Option 2
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor: 'cadetblue', height: 110, display: 'flex', padding: 30, }}>
                        {toggleButton   }
                        <Input placeholder="Search" onChange={searchData} style={{width : 600, marginLeft : 100, height : 50}}/>
                        <Button type="primary" style={{height : 50, width : 100, marginLeft : 400}} onClick={showModal}>Uza</Button>
                    </Header>
                    <Content style={{backgroundColor : 'gray'}}>
                        <Card style={{padding : 30,}}>
                            {productsList}
                            <LoginForm setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
                        </Card>

                    </Content>
                    <Footer style={{backgroundColor: 'gray', width: '100%', height: 500}}>
                        <PageFooter />
                    </Footer>
                </Layout>
            </Layout>
            </>
    )
}

