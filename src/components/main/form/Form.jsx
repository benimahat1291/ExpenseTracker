import React, { useContext, useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { ExpenseTrackerContext } from "../../../context/context";
import "./From.css";
import { v4 as uuidv4 } from "uuid";
import formatDate from "../../../utils/formatDate";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
import { useSpeechContext } from "@speechly/react-client";
import SnackbarComponent from "../../snackbar/Snackbar";

const initialState = {
  amount: "",
  category: "",
  typeOf: "Income",
  date: formatDate(new Date()),
};

const Form = () => {

  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const { segment } = useSpeechContext();
  const [open, setOpen] = useState(false);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
    console.log("Transaction>>", transaction);
  };

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === "add_expense") {
        setFormData({ ...formData, typeOf: "Expense" });
      } else if (segment.intent.intent === "add_income") {
        setFormData({ ...formData, typeOf: "Income" });
      } else if (
        segment.isFinal &&
        segment.intent.intent === "create_transaction"
      ) {
        return createTransaction();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setFormData(initialState);
      }

      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value
          .slice(1)
          .toLowerCase()}`;
        switch (e.type) {
          case "amount":
            setFormData({ ...formData, amount: e.value });
            break;
          case "category":
            if (incomeCategories.map((ic) => ic.type).includes(category)) {
              setFormData({
                ...formData,
                typeOf: "Income",
                category: category,
              });
            } else if (
              expenseCategories.map((ic) => ic.type).includes(category)
            ) {
              setFormData({
                ...formData,
                typeOf: "Expense",
                category: category,
              });
            }
            break;
          case "date":
            setFormData({ ...formData, date: e.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.typeOf &&
        formData.date
      ) {
        createTransaction();
      }
    }
  }, [segment]);

  const selectedCategories =
    formData.typeOf === "Income" ? incomeCategories : expenseCategories;

  return (
    <div className="from">
      <SnackbarComponent open={open} setOpen={setOpen} />
      <div className="from__group">
      <FormControl fullWidth style={{margin: "2rem"}}>
        <InputLabel>Types</InputLabel>
        <Select
          value={formData.typeOf}
          onChange={(e) => setFormData({ ...formData, typeOf: e.target.value })}
        >
          {console.log(formData.typeOf)}
          {["Income", "Expense"].map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth style={{margin: "2rem"}}>
        <InputLabel>Category</InputLabel>
        <Select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {selectedCategories.map((c) => (
            <MenuItem key={c.type} value={c.type}>
              {c.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth style={{margin: "2rem"}}>
        <TextField
          type="number"
          label="Amount"
          fullwidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </FormControl>
      <FormControl fullWidth style={{margin: "2rem"}}>
        <TextField
          type="date"
          label="Date"
          style={{ width: "100%" }}
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </FormControl>
      </div>

      
    <div>
         <IconButton
        className="from__button"
        variant="outlined"
        color="primary"
        fullwidth
        onClick={createTransaction}
      >
        <CheckCircleOutlineIcon/>
      </IconButton>
    </div>
     
    </div>
  );
};

export default Form;
