function CounterAction(props) {
return(
    <>
    <button className="button button1" onClick={props.increment}>increment</button>
    <button className="button button2" onClick={props.decrement}>decrement</button>
    </>
)
}
export default CounterAction