const initialValue = {
    count : 0
};

const generateReducer = (state = initialValue, action )=>{
    switch (action.type) {
        case "INC":
            return {
                ...state,
                count : state.count +1
            };
        
        case "DEC":
            return {
                ...state,
                count : state.count - 1
            }
        default : 
            return state;
    }
}
export default generateReducer;
