import React, { useState } from "react";
import { db } from "../fbase";

const FavoriteAuthorEdit = ({ favAuthorObj }) => {
    const [authorListEditMode, setAuthorListEditMode] = useState(false);
    const [editedFavAuthor, setEditedFavAuthor] = useState("");
    const onChange = (event) => {
        const { target: { value } } = event;
        setEditedFavAuthor(value);
    }
    const toggleEditAuthorList = () => {
        setAuthorListEditMode(prev => !prev)
    }
    const onDeleteAuthorClick = async () => {
        await db.doc(`fav-author/${favAuthorObj.id}`).delete()
    }
    const onSubmitEditedFavAuthor = async (event) => {
        await db.doc(`fav-author/${favAuthorObj.id}`).update({
            favoriteAuthor: editedFavAuthor,
            updatedAt: Date.now(),
        })
        setEditedFavAuthor("")
    }
    return (
        <div>
            {authorListEditMode ? (<><form onSubmit={onSubmitEditedFavAuthor}>

                <input onChange={onChange} value={editedFavAuthor} type="text"
                    placeholder={favAuthorObj.favoriteAuthor} />
                <input type="submit" value="submit edited author name" />
            </form>
            </>) : (<>
                <ul>
                    <li>{favAuthorObj.favoriteAuthor}</li>
                    <button onClick={toggleEditAuthorList}>Edit</button>
                    <button onClick={onDeleteAuthorClick}>Delete</button>
                </ul> </>)}
        </div>
    )
}

export default FavoriteAuthorEdit