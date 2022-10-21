import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); //this stop the refresh
        //do the login logic

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.massege)) 
    }

    const register = event => {
        event.preventDefault(); //this stop the refresh
        //do the register logic
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in, redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.massege)) 
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazonshop's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Account</button>
            </div>

        </div>
    )
}

export default Login
