var data = {
    employees : [
        { "emp_id" : 1, "empname" : "Rajesh" , "position" : "Web Devloper" },
        { "emp_id" : 2, "empname" : "Raj" , "position" : "App Devloper" },
        { "emp_id" : 3, "empname" : "Rajan" , "position" : "flutter Devloper" },
        { "emp_id" : 4, "empname" : "Rajendra" , "position" : "UI/UX Devloper" }
    ]
};


var newdata = {
     "emp_id" : 3,
      "empname" : "Rajan" ,
       "position" : "flutter Devloper"
     };

var Data2 = data.employees.map((emp)=>{
    return (emp.emp_id == newdata.emp_id) ? {...emp,"position" : "newData"} : emp ;
})
console.log(Data2);