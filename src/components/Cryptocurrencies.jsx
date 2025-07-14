import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins
      ?.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, count); // 🔥 Slice after filtering to respect simplified mode

    setCryptos(filteredData);
  }, [cryptosList, searchTerm, count]);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="gradient">
        <div className="hide">Search here</div>
        {" "}
        {!simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={currency.name}
                      style={{ width: "30px", height: "30px" }}
                    />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)} USD</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Cryptocurrencies;
