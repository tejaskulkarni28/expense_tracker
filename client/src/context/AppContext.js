import { createContext, useReducer } from "react"

const AppReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                //this is spread operator
                ...state,
                expense:[...state.expense, action.payload]
            }
        case 'ADD_BUDGET':
            return{
                ...state,
                budget:action.payload
            }
        default:
            return state;
    }
}


// here we can connect the database
const initialState = {
    budget:0,
    expense:[
        {id:1,name:'NULL', cost:'0'}
    ]
}

export const AppContext = createContext();

//it is just a function which..
//holds the state and passes to our components
export const AppProvider = (props)=>{
    // here dispatch is a function

    // here AppReducer is incharge of to update the new state as per the actions
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget:state.budget,
        expense:state.expense,
        dispatch,
    }}
    >
        {props.children}
    </AppContext.Provider>
    )

}