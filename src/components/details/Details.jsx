import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import "./Details.css";

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  return (
    <div className="chartContainer">
      <div className={title === "Income" ? "income" : "expense"}>
        <Typography variant="h5">${total}</Typography>
        <div className="chartContainer__chart">
          <Doughnut data={chartData} width="50%" height="50%" />
        </div>
      </div>
    </div>
  );
};

export default Details;
