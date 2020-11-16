import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase'
function AdminLogin() {
 
    const [{ userAdmin }, dispatch] = useStateValue();
    const history = useHistory()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const signIn =(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(auth=>{
            console.log('auth',userAdmin);
            if(userAdmin)
            console.log('user',userAdmin);
            history.push('/admin')
        })
        .catch(err=>alert(err.message))
    }
    return (
        <div className="login">
            <form action="" className="login__container">
                <h1>Admin Login</h1>
                <h6>
                    E-mail
                     </h6>
                <input type="text" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                <h6>
                    password
                     </h6>
                <input type="password" placeholder="password" value={password} onChange={e => setpassword(e.target.value)} />
                <br/>
                <button type="submit" onClick={signIn} className="btn btn-dark">Sign In</button>
            </form>
        </div>
    )
}

export default AdminLogin
