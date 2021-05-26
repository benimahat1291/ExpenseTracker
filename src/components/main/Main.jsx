import React, { useContext } from "react";
import { CardHeader } from "@material-ui/core";
import "./Main.css";
import useStyles from "./styles";
import Form from "./form/Form";
import { ExpenseTrackerContext } from "../../context/context";
import SpeechlyCard from "../speechlyCard/SpeechlyCard";
import List from "./list/List";
import Details from "../details/Details";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div className="main">
      <div className="main__title">
        <div className="main__speechlyCard">
          <SpeechlyCard />
        </div>
      </div>
      <div className="main__from">
        <Form />
      </div>
      <div className="main__charts">
        <div className="main__list">
          <List />
        </div>
        <div className="main__expenceTrackerIncome">
          <Details title="Income" />
        </div>

        <div className="main__expenceTrackerExpence">
          <Details title="Expense" />
        </div>
      </div>
    </div>
  );
};

export default Main;
