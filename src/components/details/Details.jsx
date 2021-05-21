import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import "./Details.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  return (
    <div className="chartContainer">
      <div className="chartContainer__header">
        <Typography
          variant="h5"
          className={
            title === "Income"
              ? "chartContainer__income"
              : "chartContainer__expense"
          }
        >
          {title === "Income" ? <AddIcon /> : <RemoveIcon />}
          {total}
        </Typography>
      </div>
      <div className="chartContainer__chartSection">
        <div className="chartContainer__chart">
          <Doughnut data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Details;
