import {DesktopOutlined, TagOutlined, QuestionOutlined, CarOutlined,ReadOutlined, BoxPlotOutlined, AntCloudOutlined, MenuFoldOutlined, TeamOutlined, HomeOutlined, SkinOutlined, FilterOutlined, EnvironmentOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './App.css';
import React, { useState} from 'react'
import { Container} from './components/container'
import { SellerPortal } from './components/seller'
import { AdminPortal } from './components/adminPage'

const  App = () => {
  const categories = [
    {id : 2, name: 'Electronics', icon: <DesktopOutlined />},
    {id : 3, name: 'Furnitures', icon: <BoxPlotOutlined />},
    {id : 4, name: 'Clothes', icon: <SkinOutlined />},
    {id : 5, name: 'Shoes', icon: <AntCloudOutlined />},
    {id : 6, name: 'Stationary', icon: <ReadOutlined />},
    ]
  const conditions = [
    {id: 1, status: 'New'},
    {id: 2, status: 'Used'},
  ]
  const initialProducts = [ 
    {name : 'Buti La Jeje', id : 1, price : '450,000', category: 'Shoes', location : 'Cive', url: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg"},
    {name : 'Nike', id : 2, price : '450,000', category: 'Shoes', location : 'Cive', url: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg"},
    {name : 'Bed', id : 3, price : '50,000', category: 'Furnitures', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    {name : 'Printer', id : 4, price : '950,000', category: 'Stationary', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    {name : 'T-Shirt', id :5, price : '59,000', category: 'Clothes', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"},
    ]
  for (let i = 6; i < 10; i++){
        initialProducts.push({name : 'Laptop', id : i, price : '450,000', category: 'Electronics', location : 'Cive', url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})
    }
  const [render, setrender] = useState(3)
  const [products, setproducts] = useState(initialProducts)

  const showLoginPage = () => {
    setrender(2)
  }
  const showHomePage = () => {
    setrender(1)
  }
  const homePage = <Container setrender={showLoginPage} categories={categories} products={products} />
  const sellerPage = <SellerPortal logout={showHomePage} categories={categories} conditions={conditions} setproducts={setproducts} />
  const adminPage = <AdminPortal logout={showHomePage} categories={categories} conditions={conditions} setproducts={setproducts} />

  const pages = {
    1 : homePage,
    2 : sellerPage,
    3 : adminPage
  }
  return (
    <div>
       {pages[render]}
    </div>
  );
}

export default App;
