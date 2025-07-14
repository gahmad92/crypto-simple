import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar,Stocks,Cryptocurrencies,CryptoDetails,News } from "./components";
import Homepage from "./components/Homepage";
import { Link } from "react-router-dom";
import StockDetail from "./components/StockDetail";
import Gold from "./components/Gold";
import CashFlow from "./components/cashFlow";

import "./App.css";

const {Title} = Typography;

const App = () => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="router">
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/stocks" element={<Stocks/>} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
                <Route path="/news" element={<News/>}/>
                <Route path="/stocks/:symbol" element={<StockDetail />} />
                <Route path="/gold" element={<Gold/>}/>
                <Route path="/cash" element={<CashFlow/>}/>
              </Routes>
            </div>
          </Layout>
        
        <div className="footer">
        <Title level={4} style={{color:'white', textAlign:'center'}}>
        Flip Cryptos <br/>
        All rights reserved
        </Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges' >Exchanges</Link>
         <Link to='/news'>News</Link>
        </Space>
        </div>
        </div>
      </div>
    </>
  );
};

export default App;
