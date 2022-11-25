import React from "react";
import { useState ,useContext} from "react";
import { AppContext } from "../context/AppContext";

const Budget = ()=>{

    
    const {dispatch} = useContext(AppContext);
    const[addBudget, setBudget] = useState();
    const {budget} = useContext(AppContext);

    const AddBudgetFunction = (event)=>{
        event.preventDefault();

        const budget = addBudget;

        dispatch({
            type:'ADD_BUDGET',
            payload:budget
        })
        
    }
    return(
        <form onSubmit={AddBudgetFunction}>
        <div className="budget-container">
            <ul>
                <li><p>Budget: {budget}</p></li>
                <input type="number"onChange={(event)=>{setBudget(event.target.value)}} placeholder="...add budget"/>
                <li><button>ADD: </button></li>
            </ul>
        </div>
        </form>
    )
}

export default Budget;