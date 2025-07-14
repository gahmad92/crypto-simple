import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { FaBitcoin } from 'react-icons/fa6';
import { TbHomeBitcoin } from 'react-icons/tb';
  import { GiGoldBar } from 'react-icons/gi';
  import { BsCashCoin } from 'react-icons/bs';
import {
 
  MoneyCollectOutlined,
  BulbOutlined,
 
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const { Title } = Typography;
const { Item } = Menu;

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size={96} />
          <Title level={2} className="logo">
            <Link to="/">Flip Cryptos</Link>
          </Title>
          {/* <Button className='menu-control-container'>

        </Button> */}
        </div>
        <Menu theme="dark">
            
          <Item icon={< TbHomeBitcoin style={{ fontSize: '30px', color: '#f7931a' }} />}>
            <Link to="/">Home</Link>
          </Item>
          <Item icon={<FaBitcoin style={{ fontSize: "27px", color: '#f7931a' }} />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Item>
          <Item icon={<MoneyCollectOutlined style={{ fontSize: "27px", color: '#f7931a' }} />}>
            <Link to="/stocks">Stocks</Link>
          </Item>
          <Item icon={<BulbOutlined style={{ fontSize: "27px", color: '#f7931a' }} />}>
            <Link to="/news">News</Link>
          </Item>
          <Item icon={<GiGoldBar style={{ fontSize: "27px", color: '#f7931a' }} />}>
            <Link to="/gold">Gold</Link>
          </Item>
          
        </Menu>
      
      </div>
    </>
  );
};

export default Navbar;
