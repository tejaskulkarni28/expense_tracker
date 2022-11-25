import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

const List = (props)=>{
    const name = props.name;
    const cost = props.cost;

    const {dispatch} = useContext(AppContext);

    const DeleteExpense = ()=>{
        dispatch({
            type:"DELETE_EXPENSE",
            payload: props.id
        })
    }
    
    return(
        <div className="list-container">
            <ul>
                <li><p>{name} :- {cost}</p> <button onClick={DeleteExpense}>Delete</button></li>
            </ul>
        </div>

    )
}

export default List;