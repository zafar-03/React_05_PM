import './App.css'
import { Increment,Decrement } from './redux/action'
import { useSelector,useDispatch } from 'react-redux'
function App() {
  var n1 = useSelector((state)=> state.count);
  var dispatch = useDispatch();

  return (
   <>
    <h1>Redux</h1>
    <p>Count : {n1}</p>
    <button onClick={()=>{dispatch(Increment())}}>Increment</button>
    <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
   </>
  )
}

export default App
