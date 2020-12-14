import {DesktopOutlined, ReadOutlined, BoxPlotOutlined, AntCloudOutlined, SkinOutlined } from '@ant-design/icons';
import { SellerPortal } from './pages/sellerPage'
import { AdminPortal } from './pages/adminPage'
import React, { useState} from 'react'
import { Home} from './pages/homePage'
import './App.css';

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

  const users = [
    {id: 1, username: 'Seller', password: 12, email: 'seller@gmail.com', phone: 3422, enabled: true, size: 10 },
    {id: 2, username: 'Admin', password: 10, email: 'admin@gmail.com', phone: 100, enabled: true, size: 20 },

  ]

  const [products, setproducts] = useState(initialProducts)
  const [render, setrender] = useState(1)

  const showLoginPage = (phone) => {
    if(phone === 100 ){
      setrender(3)
    }
    else{
      setrender(2)
    }
  }

  const showHomePage = () => {
    setrender(1)
  }

  const homePage = <Home setrender={showLoginPage} categories={categories} products={products} users={users}/>
  const sellerPage = <SellerPortal logout={showHomePage} categories={categories} conditions={conditions} setproducts={setproducts} />
  const adminPage = <AdminPortal logout={showHomePage} categories={categories} conditions={conditions} setproducts={setproducts} />

  const pages = {
    1 : homePage,
    2 : sellerPage,
    3 : adminPage
  }

  return ( <div> {pages[render]} </div> );
}

export default App;
