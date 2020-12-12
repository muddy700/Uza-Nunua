import {DesktopOutlined, TagOutlined, QuestionOutlined, CarOutlined,ReadOutlined, BoxPlotOutlined, AntCloudOutlined, MenuFoldOutlined, TeamOutlined, HomeOutlined, SkinOutlined, FilterOutlined, EnvironmentOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Typography , Layout , Menu , Breadcrumb, Input, Button, Space, Card, Row, Col, Divider, InputNumber } from 'antd'
import React, { useState, } from 'react'
import { ProductCard } from './productCard'
import { PageFooter } from './footer'
import { ProductDetails } from './productDetails'
import { LoginForm, SignUpForm } from './loginForm'


export const Container = (props) => {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography
    const { SubMenu } = Menu
    const {setrender } = props

    const initialProducts = [ 
        {name : 'Buti La Jeje', id : 1, price : '450,000', category: 'Shoes', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {name : 'Nike', id : 2, price : '450,000', category: 'Shoes', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {name : 'Bed', id : 3, price : '450,000', category: 'Furnitures', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {name : 'Printer', id : 3, price : '450,000', category: 'Stationary', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
        {name : 'T-Shirt', id : 3, price : '450,000', category: 'Clothes', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    ]
    for (let i = 4; i < 20; i++){
        initialProducts.push({name : 'Laptop', id : i, price : '450,000', category: 'Electronics', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})
    }
    const categories = [
        {id : 2, name: 'Electronics', icon: <DesktopOutlined />},
        {id : 3, name: 'Furnitures', icon: <BoxPlotOutlined />},
        {id : 4, name: 'Clothes', icon: <SkinOutlined />},
        {id : 5, name: 'Shoes', icon: <AntCloudOutlined />},
        {id : 6, name: 'Stationary', icon: <ReadOutlined />},
    ]
    const locations = [
        {id: 11, name: 'CHS'},
        {id: 12, name: 'CIVE'},
        {id: 13, name: 'COED'},
        {id: 14, name: 'COES'},
        {id: 15, name: 'CBSL'},
        {id: 16, name: 'SOCIAL'},
        {id: 17, name: 'HUMANITIIES'},
    ]
    const [filteredProducts, setfilteredProducts] = useState([])
    const filterCategory = (cat) => {
        setisFiltered(true)
     const  newProducts = products.filter((product) => product.category === cat)
       setfilteredProducts(newProducts)
    }
    const categoryList = categories.map((cat) => {
        return( <Menu.Item key={cat.id} icon={cat.icon} onClick={() => filterCategory(cat.name)}> {cat.name} </Menu.Item> ) })
    const locationList = locations.map((loc) => {
        return( <Menu.Item key={loc.id} > {loc.name} </Menu.Item> ) })

    const [collapsed, setcollapsed] = useState(false)
    const [products, setproducts] = useState(initialProducts)
    const [showInfo, setshowInfo] = useState(true)
    const [loginModal, setloginModal] = useState(false);
    const [signUpModal, setsignUpModal] = useState(false);
    const [isFiltered, setisFiltered] = useState(false)

    const arrayToMap = isFiltered ? filteredProducts : products
    const productsList =  <Row gutter={[0, 24]} >
                            { arrayToMap.map((data) => {return <Col  span={6} key={data.id}> <ProductCard setshowInfo={setshowInfo} product={data} />  </Col>})}
                        </Row>
    const productInfo = <ProductDetails product={products[0]} />
    // const modo =  loginModal ? <LoginForm /> : null

    const toggle = () => {
        setcollapsed(!collapsed)
    }

    const searchData = () => {
        console.log("container")
    }
    const showModal = () => {
          setloginModal(true);
      };
    const toggleButton = collapsed ? <MenuUnfoldOutlined className="trigger" onClick={toggle} /> :
     <MenuFoldOutlined className="trigger"  onClick={toggle} />
     
    const goHome = () => {
        setisFiltered(false)
    }

    return (<>
            <Layout >
                <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" >{collapsed? "UZA \n NUNUA" : ''}</div>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />} onClick={goHome}>
                        Home
                        </Menu.Item>
                        <Divider >Categories</Divider>
                        {categoryList}   
                        <Divider >Filter Options</Divider>
                        <SubMenu key="sub1" icon={<TagOutlined />} title="Price">
                            <Menu.Item key="7">
                                <InputNumber placeholder="Min" />
                            </Menu.Item>
                            <Menu.Item key="8">
                                <InputNumber placeholder="Max" />
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Negotiatable">
                            <Menu.Item key="9">
                                Yes
                            </Menu.Item>
                            <Menu.Item key="10">
                                No
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<EnvironmentOutlined />} title="Location">
                          {locationList}
                        </SubMenu>
                        <SubMenu key="sub4" icon={<QuestionOutlined />} title="Conditions">
                            <Menu.Item key="18">
                                New
                            </Menu.Item>
                            <Menu.Item key="19">
                                Used
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<CarOutlined />} title="Delivery Offered">
                            <Menu.Item key="20">
                                Yes
                            </Menu.Item>
                            <Menu.Item key="21">
                                No
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="22">
                            <Button type="primary" style={{width: '100%'}} icon={<FilterOutlined />}>Filter</Button>
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
                            {productsList }
                            {/* {productInfo} */}
                            <LoginForm setloginModal={setloginModal} loginModal={loginModal} setrender={setrender} setsignUpModal={setsignUpModal} />
                            <SignUpForm setsignUpModal={setsignUpModal} signUpModal={signUpModal} />
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

