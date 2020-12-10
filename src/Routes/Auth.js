import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService, db, firebaseInstance } from "../fbase";

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
        const { target: { name } } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();

        }
        await authService.signInWithPopup(provider)
        // .then((result) => {
        //     const user = result.user;
        //     const credential = result.credential;
        // }, (error) => {
        //     const email = error.email;
        //     const credential = error.credential;
        //     if (error.code === 'auth/account-exists-with-different-credential') {
        //         authService.fetchSignInMethodsForEmail(email).then((providers) => { })
        //     }
        // })
        // const userUid = authService.currentUser.uid;
        // const displayName = authService.currentUser.displayName;
        // const email = authService.currentUser.email;
        // await db.collection('profiles').doc(userUid).set({
        //     email, userUid, displayName,
        // })
    }
    return (
        <div className="landing">
            <div className="landingpage">
                <h4>"Sometimes <br /> the Books <br /> Speak for you"</h4>
            </div>
            <div className="auth-form">
                <form className="container" onSubmit={onSubmit}>
                    <input
                        className="auth-form-1 row"
                        onChange={onChange}
                        name="email" type="email" placeholder="Email"
                        value={email} required />
                    <div className="auth-form-2 row">
                        <input
                            onChange={onChange}
                            name="password"
                            type="password" placeholder="Password"
                            value={password} required />
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <div className="create-acc-btns">
                
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
                <Link to="/createaccount">
                    <input type="submit" value=" Sign Up with Email " />
                </Link>
                </div>
                <h3>{signInError}</h3>
            </div>
        </div>
    )
}
export default Auth;