import firebase from '../../firebase'
const getProducts=()=>{
    return (dispatch)=>{
        let arr=[]
        firebase.database().ref('/').on('value',snapshot=>{
            if(snapshot.val()!=null)
            for(const key in snapshot.val()){
               arr.push(snapshot.val()[key])
            dispatch({type:"SET", data:arr})
        }})
        
}
}
export {
    getProducts
}