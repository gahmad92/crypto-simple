import React from "react";
import { useGetLiveGoldRatesQuery } from "../services/goldApi";
import "./Gold.css"; // Optional styling layer

const Gold = () => {
  const { data, isLoading, isError } = useGetLiveGoldRatesQuery();

  if (isLoading) return <div className="loading-gold-custom">🌐 Loading gold rates...</div>;
  if (isError) return <div className="error-gold-custom">⚠️ Unable to fetch gold data.</div>;

  const rates = data?.data || [];

  return (
    <div className="gold-container-custom">
      <h2 className="gold-title-custom">💰 Live Gold Exchange Rates</h2>
      <div className="gold-grid-custom">
        {rates.map((item, index) => (
          <div key={index} className="gold-card-custom">
            <h3>{item.description}</h3>
            <p><strong>Currency:</strong> {item.currencyCode}</p>
            <p><strong>Base:</strong> {item.baseCurrencyCode}</p>
            <p><strong>Buy:</strong> ₺{item.buy}</p>
            <p><strong>Sell:</strong> ₺{item.sell}</p>
            <p><strong>Change:</strong> {item.changeRate * 100}%</p>
            <p><strong>High:</strong> ₺{item.dayHigh}</p>
            <p><strong>Low:</strong> ₺{item.dayLow}</p>
            <p><strong>Previous Close:</strong> ₺{item.prevClose}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gold;
