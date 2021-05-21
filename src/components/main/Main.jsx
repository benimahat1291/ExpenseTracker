import React, { useContext } from "react";
import { CardHeader, Typography } from "@material-ui/core";
import "./Main.css";
import useStyles from "./styles";
import Form from "./form/Form";
import List from "./list/List";
import { ExpenseTrackerContext } from "../../context/context";
import SpeechlyCard from "../speechlyCard/SpeechlyCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div className="main">
      <div className="main__title">
        <div className="main__cardHeader">
          <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        </div>
        {/* <Typography variant="h5">{`$${balance}`}</Typography> */}
        <div className="main__speechlyCard">
          <SpeechlyCard />
        </div>
      </div>

      <div className="main__from">
        <Form />
      </div>

      <div>{/* <List /> */}</div>
    </div>
  );
};

export default Main;
