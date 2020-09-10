import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); // Prevents from refreshing the page

        // Login w/ Firebase
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // Register w/ Firebase
        auth
        // Creates a user with email & password
        .createUserWithEmailAndPassword(email, password)
        // Returns back if everything went smooth with 'auth' object
        .then((auth) => {
            // Succeffully created a user with email & password
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                alt=""/>
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>
                
                <form>
                    <h5>Email</h5>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>

                    <button 
                        className="login__signInButton"
                        type='submit'
                        onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON CLONE Condition of Use
                    & Sale. Please see our Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice.
                </p>
                
                <button 
                className="login__registerButton"
                onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
