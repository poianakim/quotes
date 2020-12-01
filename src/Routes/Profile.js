import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteAuthorEdit from "../Components/favoriteAuthorEdit";
import { authService, db } from "../fbase";

const Profile = ({ userObj }) => {
    const [displayName, setDisplayName] = useState(userObj.displayName);
    const [favAuthor, setFavAuthor] = useState("");
    const [favAuthors, setFavAuthors] = useState([]);
    const getFavAuthors = async () => {
        await db.collection('fav-author')
            .where("creatorId", "==", authService.currentUser.uid)
            .orderBy("createdAt")
            .onSnapshot((shot) => {
               const favAuthorsArr = shot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }
                )) 
                setFavAuthors(favAuthorsArr)
            })
    }
    useEffect(() => {
        getFavAuthors();
    }, [])
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "displayname") {
            setDisplayName(value)
        }
    }
    const onProfileSubmit = async (event) => {
        await authService.currentUser.updateProfile({
            displayName,
        })
    }
    const handleFavAuthorChange = (event) => {
        const { target: { value } } = event;
        setFavAuthor(value);
    }
    const onSubmitFavAuthor = (event) => {
        event.preventDefault();
        db.collection('fav-author').add({
            favoriteAuthor: favAuthor,
            creatorId: userObj.uid,
            createdAt: Date.now(),
        })
        setFavAuthor("");
    }
    const history = useHistory();
    const onSignOutClick = () => {
        authService.signOut();
        history.push("/")
    }
    return (
        <div>
            <h3>{userObj.displayName}'s profile page</h3>

            <form onSubmit={onProfileSubmit} className="profile-edit">
                <input type="text" onChange={onChange}
                    value={displayName} name="displayname" placeholder="User Name" />
                <br />
                <input type="submit" value="Update Profile" />
            </form>
            <form >
                <input
                    onChange={handleFavAuthorChange}
                    type="text" name="favorite-author" value={favAuthor} placeholder="Add a favorite author" />
                <input onClick={onSubmitFavAuthor} type="submit" value="add an author" />
            </form>
            {favAuthors.map((author) =>
                <FavoriteAuthorEdit key={author.id} favAuthorObj={author} />
            )}
            <button onClick={onSignOutClick} >Sign Out</button>
        </div>
    )
}
export default Profile;