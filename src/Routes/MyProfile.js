import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FavoriteAuthorEdit from "../Components/favoriteAuthorEdit";
import MyQuotes from "../Components/MyQuotes";
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
                }))
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
       event.preventDefault();
        db.collection('quotes').where('creatorId', "==", userObj.uid)
        .get().then(response => {
            let batch = db.batch()
            response.docs.forEach((doc) => {
                const docRef = db.collection('quotes').doc(doc.id)
                batch.update(docRef, {
                    "displayName" : displayName,
                })
            })
            batch.commit().then(() => {
                console.log(`updated quotes' displayname`)
            })
        })

        await authService.currentUser
        .updateProfile({
            displayName,
        }).then(console.log("auth profile displayname changed"))
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
            <h4 className="user-name">{userObj.displayName}'s profile page</h4>
            <div className="box">
                <div className="profile-fav-author">
                    <h5 className="fav-authors">My Favorite Writers</h5>

                    {favAuthors.map((author) =>
                        <FavoriteAuthorEdit key={author.id} favAuthorObj={author} authorListEditMode={authorListEditMode} />
                    )}
                    {authorListEditMode ?
                        <div className="container">
                            <form className="row" >
                                <input
                                    onChange={handleFavAuthorChange}
                                    type="text" name="favorite-author" value={favAuthor} placeholder="Add a favorite author" />
                                <input onClick={onSubmitFavAuthor} type="submit" value="Submit" />
                            </form>
                            <button className="fav-author-edit-btn row" onClick={toggleEditAuthorList}>Edit Done</button>
                        </div> :
                        <button className="fav-author-edit-btn" onClick={toggleEditAuthorList}>Edit List</button>}
                </div>
                <div className="profile-quotes">
                    <h5>{userObj.displayName}'s quotes collection</h5>
                    <MyQuotes userObj={userObj} />
                </div>
            </div>
            <form onSubmit={onProfileSubmit} className="profile-edit row">
                <input type="text" onChange={onChange}
                    value={displayName} name="displayname"
                    placeholder="User Name" maxLength="10" />
                <br />
                <input id="username-update-btn" type="submit" value="Update Username" />
            </form>

            <br />
            <button id="sign-out" onClick={onSignOutClick} >Sign Out</button>
        </div>
    )
}
export default MyProfile;