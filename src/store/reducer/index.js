const INITIAL_STATE = {
    // productsData: [{
    //     name:'afnan'
    // }]
    pdata:[]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET":
            return state.pdata.push(...action.data)
            
        default:
            return state;
    }     
       
}

