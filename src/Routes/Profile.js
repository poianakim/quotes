import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import { authService, db } from "../fbase";

const Profile = ({ userObj }) => {
    const history = useHistory();
    const onSignOutClick = () => {
        authService.signOut();
        history.push("/")
    }
    const [displayName, setDisplayName] = useState(userObj.displayName);
    const [description, setDescription] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "displayname") {
            setDisplayName(value)
        } else if (name === "user-description") {
            setDescription(value)
        }
    }
    const onProfileSubmit = async (event) => {
        event.preventDefault();
        await authService.currentUser.updateProfile({
            displayName,
        })
        await db.collection('user-des').add({
            description,
            user: userObj.id,
            createdAt: Date.now,
        })
    }
    return (
        <div>
            <h3>{userObj.displayName}'s profile page</h3>
            <h5>{description}</h5>
            <form onSubmit={onProfileSubmit} className="profile-edit">
                <input type="text" onChange={onChange}
                    value={displayName} name="displayname" placeholder="User Name" />
                <br />
                <input id="user-description" type="text" onChange={onChange}
                    value={description} name="user-description" placeholder="Description" />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onSignOutClick} >Sign Out</button>
        </div>
    )
}
export default Profile;