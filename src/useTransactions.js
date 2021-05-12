import {useContext} from "react";
import {ExpenseTrackerContext} from "./context/context";
import {incomeCategories, expenseCategories, resetCategories} from "./constants/categories";

const useTransactions = (title) => {
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    // console.log("type",transactions[0].type)
    // console.log("transactions>>>>", transactions)
    const transactionsPerType = transactions.filter((t) => t.typeOf === title);
    const total = transactionsPerType.reduce((acc, curVal) => acc += curVal.amount, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;

    console.log({total, categories, transactionsPerType})

    transactionsPerType.forEach((t)=> { 
        const category = categories.find((c)=> c.type === t.category);
        if(category) category.amount += t.amount;
    });
    
    const filteredCategories = categories.filter((c) => c.amount > 0);
    
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c)=> c.amount),
            backgroundColor:filteredCategories.map((c)=> c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    };
    
    console.log({filteredCategories, transactionsPerType, chartData, total, categories})
    return {total, chartData}
};

export default useTransactions;