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
  Typography,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import useStyles from "./styles.js";
import "./List.css"
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const List = () => {
  const classes = useStyles();
  const {deleteTransaction, transactions, balance} = useContext(ExpenseTrackerContext)


  return (
    <div className="list">
        <div className="list__header">
        <Typography
          variant="h5"
          className="list__headerTitle"
        >
        Balance:
        </Typography>
        
        <Typography
          variant="h5"
          className={balance < 0  ? "list__balanceNeg" : "list__balancePos"}
        >
         {balance < 0 ? <RemoveIcon/> : <AddIcon/>}
        {balance < 0 ? (""+balance).split("").slice(1) : balance}
        </Typography>
        </div>
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
                 {transaction.typeOf === "Income" ?  <AttachMoneyIcon/> : <MoneyOff />}
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
