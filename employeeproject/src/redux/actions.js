export const add_employee = (employee)=>{
    return {
        type : "add_employee",
        payload : employee
    }
}

export const delete_employee = (emp_id)=>{
    return {
        type : "delete_employee",
        payload : emp_id
    }
}

export const update_employee = (employee)=>{
    return {
        type : "update_employee",
        payload : employee
    }
}


// employeename
// position
// id