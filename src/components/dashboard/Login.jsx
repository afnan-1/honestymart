import React,{useState} from 'react'
import firebase from '../../firebase'
import { useStateValue } from '../../StateProvider';
import './login.css'
import {Link, useHistory} from 'react-router-dom';
function Login() {
    const [{ users,userAdmin }, dispatch] = useStateValue();
    const history = useHistory();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const signIn =(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(auth=>{
            if(users)
            console.log(users)
            history.push('/')
        })
        .catch(err=>alert(err.message))
    }
    const register = (e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth.email);
            if(auth){
                history.push('/')
            }
        })
        .catch(err=>alert(err.message))
    } 
    return (
        <div className="login">
            <Link to="/">

            <img className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
             </Link>
             <div className="login__container">
                 <h1>Sign in</h1>
                 <form action="">
                     <h5>
                         E-mail
                     </h5>
                     <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}/>
                     <h5>
                         password
                     </h5>
                     <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                     <button type="submit" onClick={signIn} className="login__signinbutton">Sign In</button>
                 </form>
                 <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                 <button onClick={register} className="login__registerbutton">Create your Amazon Account</button>
             </div>
        </div>
    )
}

export default Login