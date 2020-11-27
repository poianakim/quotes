import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const Profile = () => {
    const history = useHistory();
    const onSignOutClick = () => {
        authService.signOut();
        history.push("/")
    }
    const [displayName, setDisplayName] = useState("");
    const [description, setDescription] = useState("");

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if(name === "displayname") {
            setDisplayName(value)
        } else if (name === "user-description") {
            setDescription(value)
        }
    }
    const onProfileSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit= {onProfileSubmit} className="profile-edit">
                <input type="text" onChange={onChange}
                value={displayName} name="displayname" placeholder="User Name" />
                <input type="text" onChange={onChange}
                value={description} name="user-description" placeholde="Description" />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onSignOutClick} >Sign Out</button>
        </div>
    )
}
export default Profile;