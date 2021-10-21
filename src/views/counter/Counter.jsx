import { useSelector } from 'react-redux';
import CounterAction from '../../components/counter/CounterAction';
import './Counter.css'
// import { incrementCounter } from '../../redux/counterRedux'

function Counter() {
  // global state from redux 

  const countState = useSelector(state => state.count)


  return (<div className="d-flex justify-content-center text-center flex-column align-items-center">
    <p className="counter"> {countState}</p>
    <div>
      <CounterAction />
    </div>
  </div>)

}
export default Counter