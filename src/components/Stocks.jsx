import React from "react";
import { useGetInsiderTradesQuery } from "../services/stocksApi";
import { useNavigate } from "react-router-dom";
import "./Stocks.css";
import "../App.css";

const Stocks = () => {
  const { data, isLoading, isError } = useGetInsiderTradesQuery();
  const navigate = useNavigate();

  if (isLoading) return <div className="loading-custom">🔄 Fetching insider trades...</div>;
  if (isError) return <div className="error-custom">⚠️ Could not load data. Try again later.</div>;

  const trades = data?.body || [];

  return (
    <div className="gradient">
      <div className="dashboard-custom gradient" style={{ fontWeight: "700" }}>
        <h1 className="headline-custom" style={{ color: "white" }}>
          💼 Insider Trade Tracker
        </h1>
        <div className="trades-grid-custom">
          {trades.map((trade, index) => (
            <div
              key={index}
              className="trade-card-custom"
              onClick={() =>
                navigate(`/stocks/${trade.symbol}`, {
                  state: {
                    trade,
                    allTrades: trades.filter(t => t.symbol === trade.symbol),
                  },
                })
              }
              style={{ cursor: "pointer" }}
            >
              <div className="card-top-custom">
                <h3>{trade.symbolName}</h3>
                <p className="symbol-custom">({trade.symbol})</p>
                <span className={`badge-custom ${trade.transactionType.toLowerCase()}-custom`}>
                  {trade.transactionType}
                </span>
              </div>
              <div className="card-details-custom">
                <p><strong>Name:</strong> {trade.fullName}</p>
                <p><strong>Title:</strong> {trade.shortJobTitle}</p>
                <p><strong>Amount:</strong> {trade.amount}</p>
                <p><strong>Price:</strong> ${trade.reportedPrice}</p>
                <p><strong>Value:</strong> ${trade.usdValue}</p>
                <p><strong>Holding:</strong> {trade.eodHolding}</p>
                <p><strong>Date:</strong> {trade.transactionDate}</p>
                <p><strong>Options:</strong> {trade.hasOptions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
