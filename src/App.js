import './App.css';
import React, { useState} from 'react'
import { Container} from './components/container'
import { SellerPortal } from './components/seller'
const  App = () => {
  const [render, setrender] = useState(1)
  const showLoginPage = () => {
    setrender(2)
  }
  const showHomePage = () => {
    setrender(1)
  }
  const homePage = <Container setrender={showLoginPage} />
  const sellerPage = <SellerPortal logout={showHomePage} />

  const pages = {
    1 : homePage,
    2 : sellerPage
  }
  return (
    <div>
       {pages[render]}
    </div>
  );
}

export default App;
