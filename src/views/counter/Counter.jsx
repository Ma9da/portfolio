import { useState } from "react";
import CounterAction from '../../components/counter/CounterAction';
import './Counter.css'
function Counter() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    if (count !== 0) {
      setCount(count - 1)

    }
  }
  return (
    <div className="d-flex justify-content-center text-center flex-column align-items-center">
      <p className="counter"> {count}</p>
      <div>
        <CounterAction count={count} decrement={decrement} increment={increment} />
      </div>
    </div>
  )
}
export default Counter