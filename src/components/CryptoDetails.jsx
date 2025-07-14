import React from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import { Col, Row, Typography, Select, Space } from "antd";
import {
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";
import LineChart from "./LineChart";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  // const timePeriod = "7d"; // or "24h", "30d", "1y", etc.

  const [timePeriod, setTimePeriod] = React.useState("7d");

  const timeOptions = ["3h", "24h", "7d", "30d", "1y", "3y", "5y"];

  const { data, isFetching, error } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinUuid: coinId,
    timePeriod,
  });

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error fetching coin details.</p>;

  const coin = data?.data?.coin;

  return (
    <>
      
        {" "}
        <Col className="coin-detail-container">
          <Col className="coin-heading-container">
            <Title
              level={2}
              className="coin-name"
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <img
                src={coin.iconUrl}
                alt={coin.name}
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
              {coin.name} ({coin.symbol}) Price
            </Title>

            <p>
              {coin.name} live price in USD. View value statistics, market cap
              and supply.
            </p>
          </Col>

          <Col className="stats-container">
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <DollarCircleOutlined />
                <Text>Price to USD</Text>
              </Col>
              <Text className="stats">${millify(coin.price)}</Text>
            </Col>

            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <NumberOutlined />
                <Text>Rank</Text>
              </Col>
              <Text className="stats">{coin.rank}</Text>
            </Col>

            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <ThunderboltOutlined />
                <Text>24h Volume</Text>
              </Col>
              <Text className="stats">${millify(coin["24hVolume"])}</Text>
            </Col>

            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <TrophyOutlined />
                <Text>Market Cap</Text>
              </Col>
              <Text className="stats">${millify(coin.marketCap)}</Text>
            </Col>

            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <ExclamationCircleOutlined />
                <Text>All-time High</Text>
              </Col>
              <Text className="stats">${millify(coin.allTimeHigh.price)}</Text>
            </Col>
          </Col>
          {/* chart  */}
          <div style={{ marginTop: "100px", marginBottom: "100px" }}></div>
          <LineChart
            coinHistory={coinHistory}
            currentPrice={millify(coin.price)}
            coinName={coin.name}
          />

          <Select
            defaultValue="7d"
            className="select-timeperiod"
            onChange={(value) => setTimePeriod(value)}
          >
            {timeOptions.map((period) => (
              <Option key={period}> {period}</Option>
            ))}
          </Select>

          {/* chart */}
          <Col className="coin-desc-link">
            <Row className="coin-desc">
              <Title level={3} className="coin-details-heading">
                What is {coin.name}?
              </Title>
              {HTMLReactParser(coin.description)}
              <Title level={3} className="coin-details-heading">
                <a
                  href={coin.coinrankingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  🔗 Read More Stats
                </a>
              </Title>
            </Row>
          </Col>
        </Col>
      
    </>
  );
};

export default CryptoDetails;
