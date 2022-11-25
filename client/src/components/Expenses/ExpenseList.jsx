import React,{useContext, useState} from "react";
import { AppContext } from "../../context/AppContext";
import List from "./List";


const ExpenseList = ()=>{

    const {expense} = useContext(AppContext);

    return(
        <div className="expenselist-container">
            <h1>Expense list of this month!</h1>
            <ul>
                {expense.map((i)=>{
                    return(
                        <li><List id={i.id} name={i.name} cost={i.cost} /></li>
                        // <li>{i.id} {i.name} :- {i.cost} <button onClick={deleteExpense}></button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ExpenseList;