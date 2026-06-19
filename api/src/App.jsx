
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const api = "http://localhost:3001/products";
  const api2 = "https://fakestoreapi.com/products";
  const [data,setData] = useState([]);




  const handleClick = async ()=>{
    await axios.get(api2).then((response)=>{
      setData(response.data);
    })
    
  }

  const handleDisplay = async ()=>{
    for (let i = 0; i < data.length; i++) {
      await axios.post(api,data[i]);
    }
  }
  return (
   <>
      <h1>API</h1>
      <button onClick={handleClick}>Add Data</button>
      <button onClick={handleDisplay}>Display</button>
   </>
  )
}

export default App
