import React,{useContext} from "react";
import { AppContext } from "../context/AppContext";

const Remaining = ()=>{
    const {expense, budget} = useContext(AppContext);
    
    const totalExpense = expense.reduce((total, item)=>{
        return(
            total = total + parseInt(item.cost)
        )
    },0)

    console.log(totalExpense)
    return(
        <div className="remaining-container">
            <p>Remaining: {budget - totalExpense}</p>
        </div>
    )
}

export default Remaining;