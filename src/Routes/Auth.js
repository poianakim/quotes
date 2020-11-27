import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService, firebaseInstance } from "../fbase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInError, setSignInError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            await authService.signInWithEmailAndPassword(
                email, password)
        } catch (error) {
            setSignInError(error.message);
            console.log(error.message);
        }
    }
    const onSocialClick = async (event) => {
        const {target: {name}} = event;
        let provider;
        if(name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider).then((result)=>{
            const user = result.user;
            const credential = result.credential;
        }, (error) => {
            const email = error.email;
            const credential = error.credential;
            if(error.code === 'auth/account-exists-with-different-credential'){
                authService.fetchSignInMethodsForEmail(email).then((providers) => {})
            }
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    name="email" type="email" placeholder="Email"
                    value={email} required />
                <input
                    onChange={onChange}
                    name="password"
                    type="password" placeholder="Password"
                    value={password} required />
                <input type="submit" value="Sign In" />
            </form>
            <Link to="/createaccount">
                <input type="submit" value="Sign Up" />
            </Link>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
            <h3>{signInError}</h3>
        </div>
    )
}
export default Auth;