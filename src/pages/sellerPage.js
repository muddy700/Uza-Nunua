import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, UserOutlined, KeyOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout , Menu , Button, Card, Row, Col } from 'antd'
import { ProductForm } from '../components/productForm'
import { ProductCard } from '../components/productCard'
import { PasswordForm } from '../components/password'
import { PageFooter } from '../components/footer'
import { Profile } from '../components/profile'
import React, { useState, } from 'react'

export const SellerPortal = (props) => {
    const { logout, categories, conditions, setProducts } = props
    const { Header, Footer, Sider, Content } = Layout;

    const initialProducts = [ ]
    for (let i = 0; i < 5; i++){
        initialProducts.push({name : 'Laptop', id : i, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})
    }

    const [sellerProducts, setsellerProducts] = useState(initialProducts)
    const [productModal, setproductModal] = useState(false);
    const [collapsed, setcollapsed] = useState(false)
    const [showInfo, setshowInfo] = useState(true)
    const [render, setrender] = useState(1)

    const toggle = () => {
        setcollapsed(!collapsed)
    }
    
    const showProductForm = () => {
        setproductModal(true)
    }
    
    const toggleButton = collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> :
    <MenuFoldOutlined className="trigger"  onClick={toggle} />

    const changeComponent = (menu) => {
        setrender(menu.key)
    }
    const dashboard =  <Row gutter={[0, 24]} >
                            { sellerProducts.map((data) => {return <Col  span={6} key={data.id}>
                            <ProductCard setshowInfo={setshowInfo} showProductForm={showProductForm} 
                            settingMode={true} product={data} />  </Col>})}
                        </Row>
    const settings = <PasswordForm / >
    const profile = <Profile / >

    const components = {
        1 : dashboard,
        2 : profile,
        3 : settings
    }
    
    return (<>
            <Layout >
                <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" >{collapsed? "SELLER \n NAME" : ''}</div>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<DashboardOutlined />} onClick={changeComponent}>
                        Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />} onClick={changeComponent}>
                        Profile
                        </Menu.Item>
                        <Menu.Item key="3" icon={<KeyOutlined />} onClick={changeComponent}>
                        Change Password
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor: 'cadetblue', height: 110, display: 'flex', padding: 30, }}>
                     {toggleButton   }
                      <span style={{marginLeft: '40%'}}>    SELLER PAGE</span>
                        <Button type="link" style={{height : 50, width : 100, marginLeft: '40%', color: 'white'}} onClick={logout}>Logout <LogoutOutlined /> </Button>
                    </Header>
                    <Content style={{backgroundColor : 'gray'}}>
                        <Card style={{padding : 30,}}>
                            <Button type="primary" onClick={showProductForm} >Post Ad</Button>
                            {components[render]}
                            <ProductForm productModal={productModal} setproductModal={setproductModal} categories={categories} conditions={conditions} setProducts={setProducts} />
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

