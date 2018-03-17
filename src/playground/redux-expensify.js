import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TExT_FiLTER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//ACTION GENERATORS   -------------->>

const addExpense = ({description = '', note='', amount = 0, createdAt = 0}={})=>(
    {
        type : 'ADD_EXPENSE',
        expense : {
            id: uuid(),
            description : description,
            note : note,
            amount : amount,
            createdAt : createdAt
        }
    }
)



//REDUCERS  --------->>

//ADD EXPENSE


const expensesReducerDefaultState = [] ;

const expenseReducer = (state=expensesReducerDefaultState, action)=>{

    switch(action.type){
        case 'ADD_EXPENSE' :
            return state.concat(action.expense);
        default: 
            return state;
    }
}








//FILTERS ----->

const filtersDefault = {
    text : "",
    sorttBy: "date",
    startDate : undefined,
    endDate : undefined
}

const filtersReducer = (state=filtersDefault, action)=>{

    switch(action.type){

        default :
            return state;
    }
}















//STORE ---->

const store = createStore (
    combineReducers(
        {
            expenses : expenseReducer,
            filters : filtersReducer
        }
    )
);



store.dispatch(addExpense({description : "Rent", amount : 100}))
store.subscribe(console.log(store.getState()));


const demoState = {
    expenses : [{
        id : 'poiasdfadf',
        description : 'January Rent',
        note : 'This was the final payment for that address',
        amount : 54500,
        createdAt : 0
    }],
    filters : {
        text: 'rent',
        sortBy: 'amount', //this can change to date or amount
        startDate: undefined,
        endDate : undefined
    }
}


