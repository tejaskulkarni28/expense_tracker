import React,{useContext} from "react";
import { AppContext } from "../../context/AppContext";

const ExpenseList = ()=>{

    const {expense} = useContext(AppContext);
    return(
        <div className="expenselist-container">
            <h1>Expense list of this month!</h1>
            <ul>
                {expense.map((i)=>{
                    return(
                        <li>{i.name} :- {i.cost} <input type="button" /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ExpenseList;