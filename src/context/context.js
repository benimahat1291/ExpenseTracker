import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

// const initialState = [{ amount: 5, category: "Savings", typeOf: "Income", date: "12-18-2020", id: "1" }, {amount: 5, category: "Bills", typeOf: "Expense", date: "12-18-2020", id: "2"}];
const initialState = JSON.parse(localStorage.getItem("transactions")) || [{ amount: 5, category: "Savings", typeOf: "Income", date: "12-18-2020", id: "1" }, {amount: 5, category: "Bills", typeOf: "Expense", date: "12-18-2020", id: "2"}];


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState)


    const deleteTransaction = (id) => { dispatch({ type: "DELETE_TRANSACTION", payload: id }) };
    const addTransaction = (transaction) => { dispatch({ type: "ADD_TRANSACTION", payload: transaction }) }
    const balance = transactions.reduce((acc, curVal) => {
        return ()
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions
        }}>
            {children}
        </ExpenseTrackerContext.Provider>

    )
}