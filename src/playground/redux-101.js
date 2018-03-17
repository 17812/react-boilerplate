import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1}={})=>( //extract incrementBy and when nothing passed provide empty object so there is no error
  {
   type: 'INCREMENT',
   incrementBy : incrementBy
 }
)

const decrementCount = ({decrementBy = 1}={})=>(
  {
    type : "DECREMENT",
    decrementBy : decrementBy
  }
)

const resetCount = ((payload={})=>(
  {
    type : "RESET",
  
  }))

const setCount = ({count = 1}={})=>(
  {
    type : "SET",
    count : count
  }
)

const countReducer = (state ={count : 0}, action) => {

  switch(action.type){
    
    case 'INCREMENT' :
      return {count : state.count+action.incrementBy}
    case 'DECREMENT':
    // const decrementBy=typeof action.decrementBy==='number'?action.decrementBy:1;
      return {count : state.count-action.decrementBy};
    case 'RESET' :
      return {count : 0};
    case 'SET':
      return {count : action.count};
    default :
      return state;
  }
}


const store = createStore(countReducer);



//Action is a nn object that gets sent to the store.
//when store gets updated, subscribe function runs. 

const unsubscribe=store.subscribe(()=>{
  console.log(store.getState());
})



store.dispatch(incrementCount({incrementBy : 7}));


store.dispatch(decrementCount({decrementBy : 5}));

// unsubscribe();

store.dispatch(resetCount());


store.dispatch(setCount());

store.dispatch(setCount({ count : 20}));

//action generators are functions that return actions


//REDUCERS
// 1. Reducers are pure functions. Meaning output of the function is purely depends on the input of the function. 

//below is not a pure function. The output of the function is not determined by the pure input of the function. 

// let a =10; 

// const add = (b)=>{
//   return a+b
// }
