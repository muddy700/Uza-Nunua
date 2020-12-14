import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, UserOutlined, KeyOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout , Menu , Button, Card, Row, Col } from 'antd'
import React, { useState, } from 'react'
import { ProductCard } from '../components/productCard'
import { PageFooter } from '../components/footer'
import { ProductForm } from '../components/productForm'
import { Profile } from '../components/profile'
import { PasswordForm } from '../components/password'
import { AdminDashboard} from '../components/admindashboard'
import { SellersList } from '../components/sellersTable'


export const AdminPortal = (props) => {
    const { logout, categories, conditions } = props
    const { Header, Footer, Sider, Content } = Layout;

    const initialProducts = [ 
    {name : 'Laptop2', id : 1, sellerId: 2, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    {name : 'Seller1-1', id : 2, sellerId: 1, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    {name : 'Laptop2', id : 3, sellerId: 2, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    {name : 'Seller1-2', id : 4, sellerId: 1, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    {name : 'Laptop2', id : 5, sellerId: 2, price : '450,000', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    ]
    const [products, setproducts] = useState(initialProducts)
    const [productModal, setproductModal] = useState(false);
    const [collapsed, setcollapsed] = useState(false)
    const [showInfo, setshowInfo] = useState(true)
    const [render, setrender] = useState(1)

    const toggle = () => {
        setcollapsed(!collapsed)
    }
    
    const showProductForm = () => {
        setproductModal(true)
        console.log("clicked")
        
    }
    
    const toggleButton = collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> :
    <MenuFoldOutlined className="trigger"  onClick={toggle} />

    const changeComponent = (menu) => {
        setrender(menu.key)
    }
    
    const dashboard = <AdminDashboard />
    const sellers = <SellersList products={products}/>
    const Myproducts =  <Row gutter={[0, 24]} >
                            { products.map((data) => {return <Col  span={6} key={data.id}>
                            <ProductCard setshowInfo={setshowInfo} showProductForm={showProductForm} 
                            settingMode={true} product={data} />  </Col>})}
                        </Row>
    const profile = <Profile / >
    const settings = <PasswordForm / >

    const components = {
        1 : dashboard,
        2 : sellers,
        3 : Myproducts,
        4 : profile,
        5 : settings
    }
    
    return (<>
            <Layout >
                <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" >{collapsed? "SELLER \n NAME" : ''}</div>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<DashboardOutlined />} onClick={changeComponent}>
                        Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DashboardOutlined />} onClick={changeComponent}>
                        Sellers
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DashboardOutlined />} onClick={changeComponent}>
                        My Products
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />} onClick={changeComponent}>
                        Profile
                        </Menu.Item>
                        <Menu.Item key="5" icon={<KeyOutlined />} onClick={changeComponent}>
                        Change Password
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{backgroundColor: 'cadetblue', height: 110, display: 'flex', padding: 30, }}>
                     {toggleButton   }
                      <span style={{marginLeft: '40%'}}>ADMIN PAGE</span>
                        <Button type="link" style={{height : 50, width : 100, marginLeft: '40%', color: 'white'}} onClick={logout}>Logout <LogoutOutlined /> </Button>
                    </Header>
                    <Content style={{backgroundColor : 'gray'}}>
                        <Card style={{padding : 30,}}>
                            <Button type="primary" onClick={showProductForm} >Post Ad</Button>
                            {components[render]}
                            <ProductForm productModal={productModal} setproductModal={setproductModal} categories={categories} conditions={conditions} setProducts={setproducts} />
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

