import { useState } from "react";
import CounterAction from './CounterAction';
import './Counter.css'
function Counter() {
    const[count, setCount]=useState(0)
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    if(count !== 0){
     setCount(count-1)      

    }
  }
    return(
      <>
      <p className="counter"> {count}</p>
   
    <CounterAction count={count} decrement={decrement} increment={increment}/>
    </>
    )
}
export default Counter