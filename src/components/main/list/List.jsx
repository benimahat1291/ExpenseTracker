import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles.js";

const List = () => {
  const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Work",
      amount: 100,
      date: "Tue May 11",
    },
    {
      id: 2,
      type: "Expense",
      category: "Shopping",
      amount: 20,
      date:"Tue May 13",
    },
    {
        id: 3,
        type: "Expense",
        category: "Bills",
        amount: 30,
        date:"Tue May 14",
      },
  ];

  return (
    <div>
      <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transactions.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    (transaction.type = "Income"
                      ? classes.avatarIncome
                      : classes.avatarExpense)
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick="">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </div>
  );
};

export default List;
