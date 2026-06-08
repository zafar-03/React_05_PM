
import { useState } from 'react';
import './App.css'

function App() {
  const students = [
    "Shivang", "Mahi", "Khushi", "Diya", "Smit", "Dhara", "Yashin", "Shabbir", "Aastha", "Mahek",
    "Krish", "Shyam", "Nirmal", "Aryan", "Riya", "Priya", "Karan", "Rahul", "Neha", "Pooja",
    "Vivek", "Harsh", "Jay", "Meet", "Parth", "Dev", "Tirth", "Rohan", "Sneha", "Anjali",
    "Ishita", "Nidhi", "Manan", "Vraj", "Yash", "Darshan", "Nisarg", "Om", "Het", "Jenil",
    "Bhavik", "Rutvik", "Aarav", "Vihaan", "Aditya", "Reyansh", "Kabir", "Anaya", "Myra", "Siya",
    "Aditi", "Tanvi", "Mira", "Rudra", "Arjun", "Laksh", "Ved", "Atharv", "Dhruv", "Keshav",
    "Sakshi", "Palak", "Jinal", "Khushi Patel", "Heena", "Muskan", "Alina", "Zoya", "Fatima", "Ayaan",
    "Rehan", "Imran", "Sameer", "Faizan", "Arman", "Ali", "Sana", "Ayesha", "Hina", "Noor",
    "Viraj", "Pratik", "Akash", "Nakul", "Mitesh", "Chirag", "Deep", "Utsav", "Ankit", "Sagar",
    "Bhumi", "Kajal", "Payal", "Komal", "Naina", "Vidhi", "Riddhi", "Trisha", "Meera", "Pallavi"
  ];
  let count = 1;
  const perPagesStudent = 10;
  const [lastIndex,setLastIndex] = useState(perPagesStudent);
  const firstIndex = lastIndex - perPagesStudent;

  const totalPage = students.length / perPagesStudent;

  const filterStudent = students.slice(firstIndex,lastIndex);
  // console.log(filterStudent);
  return (
    <>
      <h1>Pagination</h1>
      <div>
        {
          students.map((_,index)=>{
            if((index+1) % totalPage == 0){
              return <button key={index} onClick={()=>{setLastIndex(index+1)}}>{count++}</button>
            }
          })
        }
      </div>
      <div className='data'>
        {filterStudent.map((student,index)=>{
        return <h4 key={index}>{index+1}. {student}</h4>
      })}
      </div>


    </>
  )
}

export default App
