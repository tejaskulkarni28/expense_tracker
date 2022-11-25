import React, { useState,useContext } from "react";
import ExpenseList from "./ExpenseList";
import { AppContext } from "../../context/AppContext";
import {v4 as randomId} from "uuid";

const AddExpense = ()=>{
    
    const[name, setName] = useState('');
    const[cost, setCost] = useState('');
    const{dispatch} = useContext(AppContext)

    const onSubmit = (event)=>{
        event.preventDefault();

        const expense = {
            id: randomId(),
            name:name,
            cost:parseInt(cost)
        };

        dispatch({
            type:'ADD_EXPENSE',
            payload:expense
        })
    }
    return(
        <div className="addexpense-container">
            <ExpenseList/>
            <h1>Add Expenses</h1>
            <ul>
                <li><input type="text" onChange={(event)=>setName(event.target.value)} placeholder="..expense name" /></li>
                <li><input type="number" onChange={(event)=>{setCost(event.target.value)}} placeholder="...expense" /></li>
                <form onSubmit={onSubmit}>
                    <button>Add</button>
                </form>
            </ul>
        </div>
    )
}

export default AddExpense;