import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteAuthorEdit from "../Components/favoriteAuthorEdit";
import { authService, db } from "../fbase";

const MyProfile = ({ userObj }) => {
    const [displayName, setDisplayName] = useState(userObj.displayName);
    const [favAuthor, setFavAuthor] = useState("");
    const [favAuthors, setFavAuthors] = useState([]);
    const [authorListEditMode, setAuthorListEditMode] = useState(false);

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
        await db.doc(`profiles/${userObj.uid}`).update({
            displayName,
        })
    }
    const handleFavAuthorChange = (event) => {
        const { target: { value } } = event;
        setFavAuthor(value);
    }
    const onSubmitFavAuthor = async (event) => {
        event.preventDefault();
        await db.collection('fav-author').add({
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
    const toggleEditAuthorList = () => {
        setAuthorListEditMode(prev => !prev)
    }

    return (
        <div>
            <h4>{userObj.displayName}'s profile page</h4>
            <form onSubmit={onProfileSubmit} className="profile-edit row">
                <input type="text" onChange={onChange}
                    value={displayName} name="displayname" placeholder="User Name" />
                <br />
                <input type="submit" value="Update Username" />
            </form>
            <div>
                <h5>My Favorite Writers</h5>
               
                {favAuthors.map((author) =>
                    <FavoriteAuthorEdit key={author.id} favAuthorObj={author} authorListEditMode={authorListEditMode} />
                )}
                 {authorListEditMode ?
                    <button onClick={toggleEditAuthorList}>Edit Done</button> :
                    <button onClick={toggleEditAuthorList}>Edit List</button>}
            </div>
            <form >
                <input
                    onChange={handleFavAuthorChange}
                    type="text" name="favorite-author" value={favAuthor} placeholder="Add a favorite author" />
                <input onClick={onSubmitFavAuthor} type="submit" value="add an author" />
            </form>


            <br />
            <button id="sign-out" onClick={onSignOutClick} >Sign Out</button>
        </div>
    )
}
export default MyProfile;