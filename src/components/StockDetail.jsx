import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import StockChart from "./StockChart";
import "./Stocks.css";
import { parse, isAfter, subDays, subMonths, subYears } from "date-fns";

const StockDetail = () => {
  const location = useLocation();
  const { trade, allTrades } = location.state || {};
  const [timePeriod, setTimePeriod] = useState("7d");

  const currentPrice = trade?.reportedPrice || 0;
  const stockName = trade?.symbolName || "Stock";

  const filterByTime = (entries, period) => {
    const today = new Date();
    let cutoff;

    switch (period) {
      case "7d":
        cutoff = subDays(today, 7);
        break;
      case "1m":
        cutoff = subMonths(today, 1);
        break;
      case "3m":
        cutoff = subMonths(today, 3);
        break;
      case "6m":
        cutoff = subMonths(today, 6);
        break;
      case "1y":
        cutoff = subYears(today, 1);
        break;
      default:
        return entries;
    }

    return entries.filter((entry) => {
      const parsedDate = parse(entry.transactionDate, "MM/dd/yy", new Date());
      return isAfter(parsedDate, cutoff);
    });
  };

  const filteredTrades = filterByTime(allTrades || [], timePeriod);

  return (
    <div className="dashboard-custom">
      <h1 className="headline-custom" >
        📈 {stockName} Details
      </h1>

      <div className="time-selector-custom">
        <label htmlFor="timePeriod" style={{ fontWeight: "600" }}>
          View range:&nbsp;
        </label>
        <select
          id="timePeriod"
          className="dropdown-custom"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          <option value="7d">Last 7 Days</option>
          <option value="1m">Last 1 Month</option>
          <option value="3m">Last 3 Months</option>
          <option value="6m">Last 6 Months</option>
          <option value="1y">Last 1 Year</option>
        </select>
      </div>

      <StockChart
        stockHistory={filteredTrades}
        currentPrice={currentPrice}
        stockName={stockName}
      />
    </div>
  );
};

export default StockDetail;
