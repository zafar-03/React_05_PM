
import { useState } from 'react';
import './App.css'
import axios from 'axios'


function App() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const [id,setId] = useState(null);

  const [students, setStudents] = useState([]);
  const api = 'http://localhost:3001/students';

  const handleSubmit = async (e) => {
    if(id == null){
       await axios.post(api, { fname, email });
    }else{
       axios.put(`${api}/${id}`,{
          id : id, 
          fname : fname,
          email : email
       });
    }
  }

  const displayData = async () => {
    await axios.get(api).then((response) => {
      setStudents(response.data);
    })
    //
  }
  const handleDelete = async (id) => {
    await axios.delete(`${api}/${id}`);
    // api/id
  }

  const editStudent = (student) => {
    console.log(student);
    setFname(student.fname);
    setEmail(student.email);
    setId(student.id);
  }

  return (
    <>

      <form>
        <input type="text" placeholder="Enter your Name" value={fname} onChange={(e) => { setFname(e.target.value) }} /><br />
        <input type="text" placeholder="Enter your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <br />
        <button onClick={handleSubmit}>
          { (id == null) ? "Add Student" : "Edit Student" }
        </button>
      </form>
      <h1>Student Crud with API and JSON-server</h1>
      <button onClick={displayData}>Click</button>
      <table border="">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((s, index) => {
              return (
                <tr key={s.id}>
                  <td>{index + 1}</td>
                  <td>{s.fname}</td>
                  <td>{s.email}</td>
                  <td>
                    <button onClick={() => { editStudent(s) }}>Edit</button>
                    <button onClick={() => { handleDelete(s.id) }}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
