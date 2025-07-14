import React from "react";
import { useGetCryptoNewsQuery } from "../services/NewsApi";
import { Card, Col, Row, Typography, Tag } from "antd";
import {
  CalendarOutlined,
  TagOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const defaultImage =
  "https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg";

const CryptoNews = ({ simplified }) => {
  const { data, isFetching, error } = useGetCryptoNewsQuery();

  if (isFetching) return <p>Loading news...</p>;
  if (error) return <p>Failed to fetch news.</p>;

  const newsToDisplay = simplified ? data?.slice(0, 6) : data;

  return (
    <>
      <div className="gradient">
        <div className="hide">fkjagfjhdassgbfdajhdbadhbadbh</div>
        <div className="crypto-news-container">
          <Title
            level={1}
            className="news-heading"
            style={{
              marginBottom: "40px",
              marginTop: "40px",
              textAlign: "center",
              color:'white'
            }}
          >
            📢 Crypto Listing & Delisting News
          </Title>
          <Row gutter={[24, 24]}>
            {newsToDisplay?.map((newsItem, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card
                  hoverable
                  className="news-card"
                  cover={
                    <img
                      alt="crypto"
                      src={defaultImage}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  }
                  title={
                    <div className="news-title-custom">
                      <ThunderboltOutlined
                        style={{ color: "#faad14", marginRight: 8 }}
                      />
                      {newsItem.title}
                    </div>
                  }
                  bordered={false}
                >
                  <p>
                    <TagOutlined style={{ marginRight: 6 }} />
                    <Text strong>Symbol:</Text> {newsItem.symbol}
                  </p>
                  <p>
                    <Tag
                      color={newsItem.category === "listing" ? "green" : "red"}
                    >
                      {newsItem.category.toUpperCase()}
                    </Tag>
                  </p>
                  <p>
                    <Text strong>Source:</Text> {newsItem.source}
                  </p>
                  <p>
                    <CalendarOutlined style={{ marginRight: 6 }} />
                    <Text strong>Date:</Text>{" "}
                    {new Date(newsItem.date).toLocaleString()}
                  </p>
                  <p style={{ marginTop: 12 }}>{newsItem.content}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default CryptoNews;
