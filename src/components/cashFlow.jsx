import React from "react";
import { useGetCashFlowQuery } from "../services/cashFlowApi";
import "./CashFlow.css";

const CashFlow = ({ symbol = "AAPL:NASDAQ" }) => {
  const { data, isLoading, isError } = useGetCashFlowQuery({ symbol });

  if (isLoading) return <div className="loading-cashflow-custom">📊 Loading cash flow data...</div>;
  if (isError) return <div className="error-cashflow-custom">⚠️ Failed to fetch cash flow info.</div>;

  const flowData = data?.data?.cash_flow || [];

  return (
    <div className="cashflow-container-custom">
      <h2 className="cashflow-title-custom">💵 {data.symbol} Quarterly Cash Flow</h2>
      <div className="cashflow-grid-custom">
        {flowData.map((entry, index) => (
          <div key={index} className="cashflow-card-custom">
            <h3>📅 {entry.date}</h3>
            <p><strong>Currency:</strong> {entry.currency}</p>
            <p><strong>Net Income:</strong> ${entry.net_income.toLocaleString()}</p>
            <p><strong>Ops Cash:</strong> ${entry.cash_from_operations.toLocaleString()}</p>
            <p><strong>Investing:</strong> ${entry.cash_from_investing.toLocaleString()}</p>
            <p><strong>Financing:</strong> ${entry.cash_from_financing.toLocaleString()}</p>
            <p><strong>Net Cash Change:</strong> ${entry.net_change_in_cash.toLocaleString()}</p>
            <p><strong>Free Cash Flow:</strong> ${entry.free_cash_flow.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashFlow;
    