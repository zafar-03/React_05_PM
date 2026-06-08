
import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { add_employee,delete_employee,update_employee } from './redux/actions';

function App() {
  const [empname,setEmpname] = useState("");
  const [position,setPosition] = useState("");

  const employees = useSelector((state)=>state.employees);
  const dispatch = useDispatch();


  const addEmp = ()=>{
    const employee = {
      emp_id : Date.now(),
      empname :  empname,
      position : position 
    }

    dispatch(add_employee(employee));
  }
 
  return (
      <section>
        <h1>Hello</h1>
        <input type="text" placeholder='Enter Your name' onChange={(e)=>{setEmpname(e.target.value)}} />

        <input type="text" placeholder='Enter Your Position' onChange={(e)=>{setPosition(e.target.value)}} />
        <button onClick={addEmp}>Add Employee</button>
        <hr />
        <div>
          {employees.map((emp)=>{
            return (
              <div key={emp.emp_id}>
                  <h3>{emp.empname}</h3>
                  <p>{emp.position}</p>
                  <div>
                    <button onClick={()=>{dispatch(delete_employee(emp.emp_id))}}>Delete</button>
                    <button onClick={()=>{dispatch(update_employee(emp))}}>Update</button>
                  </div>
                  <hr />
              </div>
            )
          })}
        </div>
      </section>
  )
}

export default App
