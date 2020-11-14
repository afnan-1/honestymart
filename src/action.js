import firebase from './firebase'
import {useStateValue} from './StateProvider'
const [{},dispatch] = useStateValue();
export const signin=()=>{
    firebase.auth().onAuthStateChanged(authUser=>{
        console.log('user',authUser)
        if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })
        }
        else{
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
}