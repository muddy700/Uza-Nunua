import {TagOutlined, QuestionOutlined, CarOutlined,MenuFoldOutlined, TeamOutlined, HomeOutlined, FilterOutlined, EnvironmentOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout , Menu , Input, Button, Card, Row, Col, Divider, Image, InputNumber } from 'antd'
import { LoginForm, SignUpForm } from '../components/loginForm'
import { ProductDetails } from '../components/productDetails'
import { ProductCard } from '../components/productCard'
import { PageFooter } from '../components/footer'
import  dp from '../images/uza-nunua-logo.PNG'
import React, { useState, } from 'react'


export const Home = (props) => {
    const {setrender, categories, products } = props
    const { Header, Footer, Sider, Content } = Layout;
    const { SubMenu } = Menu

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
    const [selectedProduct, setselectedProduct] = useState(null)
    const [signUpModal, setsignUpModal] = useState(false);
    const [loginModal, setloginModal] = useState(false);
    const [isFiltered, setisFiltered] = useState(false)
    const [collapsed, setcollapsed] = useState(false)
    const [viewMode, setviewMode] = useState(false)

    const filterCategory = (cat) => {
        setisFiltered(true)
        setviewMode(false)
       setfilteredProducts(products.filter((product) => product.category === cat))
    }

    const categoryList = categories.map((cat) => {
        return( <Menu.Item key={cat.id} icon={cat.icon} onClick={() => filterCategory(cat.name)}> {cat.name} </Menu.Item> ) })

    const locationList = locations.map((loc) => {
        return( <Menu.Item key={loc.id} > {loc.name} </Menu.Item> ) })


    let arrayToMap = isFiltered ? filteredProducts : products
    const productsList =  <Row gutter={[20, 20]} >
                            { arrayToMap.map((data) => {return <Col  xs={24} lg={6} key={data.id}> <ProductCard product={data} setviewMode={setviewMode} setId={setselectedProduct} />  </Col>})}
                        </Row>
    const productInfo = <ProductDetails product={products[selectedProduct-1]} />

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
        setviewMode(false)
    }

    const contents = viewMode ? productInfo : productsList

    return (<>
        <Row>
            <Col xs={24}>
              <Layout >
                <Layout>
                    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" >{collapsed? "UZA \n NUNUA" : <Image height={120} src={dp} />}</div>
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
                             <Row>
                            <Header style={{backgroundColor: 'cadetblue', height: 110, width: '100%', display: 'flex', padding: 30, }}>
                             <Col xs={2} lg={2}>  {toggleButton   } </Col>
                             <Col xs={{span: 12, offset: 1}} lg={{span: 16}}>    <Input placeholder="Search" onChange={searchData} style={{ width: '90%', height : 50}}/> </Col>
                              <Col xs={8} lg={{span: 2, offset: 2}}>   <Button type="primary" style={{height : 50, width : '100%'}} onClick={showModal}>Uza</Button> </Col>
                            </Header>
                             </Row>
                            <Content style={{backgroundColor : 'gray'}}>
                                <Card style={{padding : 15,}}>
                                    {contents}
                                    <LoginForm setloginModal={setloginModal} loginModal={loginModal} setrender={setrender} setsignUpModal={setsignUpModal} />
                                    <SignUpForm setsignUpModal={setsignUpModal} signUpModal={signUpModal} />
                                </Card>
                            </Content>
                        </Layout>
                      </Layout>
                    <Footer style={{backgroundColor: 'gray'}}>
                        <PageFooter />
                    </Footer>
                </Layout>
            </Col>
        </Row>
            </>
    )
}

