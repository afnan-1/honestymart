export const initialState={
    userAdmin:null,
    users:null,
    search:null,
    products:[],
    prod:[]
}
const reducer = (state,action)=>{
    switch (action.type) {
            case "SET_USER":
                return {
                    ...state,
                    users:action.users
                }
            case "SET_ADMIN":
                return {
                    ...state,
                    userAdmin:action.data
                }
                case "SET_SEARCH":
                    return {
                        ...state,
                        search:action.data
                    }
                case "SET_PRODUCTS":
                    return {
                        ...state,
                        products:action.data
                    }
                case "PROD":
                    return {
                        ...state,
                        prod:action.data
                    }
        default:
            return state;
    }
};
export default reducer;
