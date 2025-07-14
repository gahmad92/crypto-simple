import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News"

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) return "loading...";

  return (
    <>
      <div className="gradient">
        <div className="hide">
          oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        </div>
        <br />
        <div className="hide">
          dfhgdghdghddfgsdgsdfsdfsdfsdfsdfsdfsdfsdfsssssssssssssssssffffffffffffffffffffffffffffffffffjgdfdfdfdfdf
        </div>
        <Title level={2} className="heading-cstm">
          Global Crypto Stats
        </Title>
        <Row>
          <Col span={10}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
              className="ch"
            />
          </Col>
          <Col className="ch" span={10}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            />
          </Col>
          <Col className="ch" span={10}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
            />
          </Col>
          <Col className="ch" span={10}>
            <Statistic
              title="Total 24hour Vol"
              value={millify(globalStats.total24hVolume)}
            />
          </Col>
          <Col className="ch" span={10}>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Col>
        </Row>

        <div className="home-heading-container">
          <Title level={2} className=" heading-cstm home-title">
            Top Crypto
          </Title>
          <Title level={4} className="home-title">
            <Link to="/cryptocurrencies" style={{ color: "white" }}>
              Show more...{" "}
            </Link>{" "}
          </Title>
        </div>

        <Cryptocurrencies simplified />
        <div className="home-heading-container">
          <Title level={2} className=" heading-cstm home-title">
            Crypto News
          </Title>
          <Title level={4} className="home-title">
            <Link to="/news" style={{ color: "white" }}>
              Show more...{" "}
            </Link>{" "}
          </Title>
        </div>

        <News simplified/>
      </div>
    </>
  );
};

export default Homepage;
