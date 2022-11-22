import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Spent =()=>{
    const {expense} = useContext(AppContext);
    const totalExpense = expense.reduce((total, item)=>{
        return(
            total = total + parseInt(item.cost)
        )
    },0)
    return(
        <div className="spent-container">
            <p>Spent so far: {totalExpense}</p>
        </div>
    )
}

export default Spent;