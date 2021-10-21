import { useDispatch } from "react-redux";
import { decrementCounter, incrementCounter } from "../../redux/counterRedux";

function CounterAction() {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementCounter(1))
    }
    const decrement = () => {
        dispatch(decrementCounter(1))
    }
    return (
        <div>
            <button className="button button1" onClick={increment}>increment</button>
            <button className="button button2" onClick={decrement}>decrement</button>
        </div>
    )
}
export default CounterAction