import React, {useContext, useState} from 'react';
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from "@material-ui/core"
import {ExpenseTrackerContext} from "../../../context/context"
import useStyles from "./styles"
import {v4 as uuidv4} from "uuid"
import formatDate from "../../../utils/formatDate"
import {incomeCategories, expenseCategories} from "../../../constants/categories"

const initialState = {
    amount: "",
    category: "",
    TypeOf: "Income",
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const {addTransaction} = useContext(ExpenseTrackerContext)

    const createTransaction = () => {
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()};
        addTransaction(transaction);
        setFormData(initialState);
        console.log('Transaction>>', transaction)
    }

    const selectedCategories = formData.typeOf === "Income" ? incomeCategories : expenseCategories;
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Types</InputLabel>
                    <Select value={formData.typeOf}  onChange={(e)=> setFormData({...formData, typeOf: e.target.value})}>
                        {console.log(formData.typeOf)}
                        {["Income", "Expense"].map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e)=> setFormData({...formData, category: e.target.value})}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullwidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullwidth value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullwidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
