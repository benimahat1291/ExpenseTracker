import React from 'react'

export const InfoCard = () => {
    const isIncome = Math.round(Math.random())
    return (
        <div style={{textAlign: 'center', padding: "0 10%", color: "black"}}>
            Try Saying: <br/>
            Add {isIncome ? "Income " : "Expense "}
            for {isIncome ? "100$ " : "50$ "}
            in Category {isIncome ? "Salary " : "Bills "}
            for {isIncome ? "Monday " : "Today "}
        </div> 
    )
}

export default InfoCard; 
