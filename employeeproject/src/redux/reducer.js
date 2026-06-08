const initialValue = {
    employees : []
}

const createReducer = (state=initialValue,action)=>{

    switch (action.type) {
        case 'add_employee':
          
            return {
                employees : [...state.employees,action.payload]
            }
        case 'delete_employee':
            return {
                employees : state.employees.filter((employee)=>{
                    return employee.emp_id != action.payload;
                })
            };
        case 'update_employee':
            return {
                 employees : state.employees.map((employee)=>{
                    return (employee.emp_id == action.payload.emp_id) ? {...employee, "position" : prompt("Enter New Position")} : employee
                })
            };
        default :
            return state;
    }

}


export default createReducer;