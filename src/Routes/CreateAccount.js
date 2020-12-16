import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, db} from "../fbase";

const CreateAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const history = useHistory();
    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            await authService.createUserWithEmailAndPassword(
                email, password
            )
            const userUid = authService.currentUser.uid;
            await db.collection('profiles').doc(userUid).set({
                email, userUid,
                displayName: email,
            })
        } catch (error) {
            setError(error.message)
            console.log(error)
        }
        history.push("/home")
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
                <br /><input type="submit" value="Create New Account" />
                <h3>{error}</h3>
            </form>
        </div>
    )
};

export default CreateAccount;