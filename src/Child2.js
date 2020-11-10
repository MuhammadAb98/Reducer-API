import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';


const Child2 = ()=>
{
    let [state, dispatch] = useReducer(CounterReducer,10);
    
    console.log(state);
return(
<div>

<h1>Counter reducer</h1>
<h1>Value of Reducer state: {state}</h1>
    <button
    onClick={()=>{

        dispatch('INCREMENT');
    }}
    >
        Increment Reducer
    </button>

    <button
    onClick={()=>{

        dispatch('DECREMENT');
    }}
    >
        Decrement Reducer
    </button>
</div>
);
}

export default Child2;