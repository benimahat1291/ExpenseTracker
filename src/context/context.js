import React, { useReducer, createContext } from "react";

const initialState = [];

const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    return (
        < ExpenseTrackerContext.Provider value={{appName: "ExpenseTracker"}}>
            {children}
        </ExpenseTrackerContext.Provider>

    )
}