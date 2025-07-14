import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const StockChart = ({ stockHistory, currentPrice, stockName }) => {
  const chartData = useMemo(() => {
    const priceData = [];
    const timeLabels = [];

    stockHistory.forEach((entry) => {
      priceData.push(Number(entry.reportedPrice));
      timeLabels.push(entry.transactionDate);
    });

    return {
      labels: timeLabels.reverse(),
      datasets: [
        {
          label: "Reported Price (USD)",
          data: priceData.reverse(),
          fill: true,
          backgroundColor: "rgba(0, 113, 189, 0.1)",
          borderColor: "#0071bd",
          tension: 0.3,
        },
      ],
    };
  }, [stockHistory]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: false },
      x: { ticks: { autoSkip: true, maxTicksLimit: 10 } },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{stockName} Trade Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Latest Trade: ${currentPrice}</Title>
        </Col>
      </Row>
      <Line data={chartData} options={options} />
    </>
  );
};

export default StockChart;
