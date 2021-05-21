import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./form/Form";
import List from "./list/List";
import { ExpenseTrackerContext } from "../../context/context";
import { InfoCard } from "./form/InfoCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <div className={classes.card}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <div>
        <Typography align="center" variant="h5">
          {`Balance:  $${balance}`}
        </Typography>
        <Divider />
        <Form />
      </div>
      <div className={classes.cardContent}>
        <div>
          <div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
