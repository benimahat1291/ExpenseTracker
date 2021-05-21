import React, {useContext} from "react";
import {ExpenseTrackerContext} from "../../../context/context"
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
  const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext)

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
                    (transaction.typeOf === "Income"
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
                <IconButton edge="end" aria-label="delete" onClick={()=> deleteTransaction(transaction.id)}>
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
