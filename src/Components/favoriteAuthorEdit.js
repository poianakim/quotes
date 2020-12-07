import React, { useState } from "react";
import { db } from "../fbase";

const FavoriteAuthorEdit = ({ favAuthorObj, authorListEditMode }) => {
    const [editedFavAuthor, setEditedFavAuthor] = useState("");
    const onChange = (event) => {
        const { target: { value } } = event;
        setEditedFavAuthor(value);
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
        const authorListEditModeChange = (authorListEditMode) => !authorListEditMode
    }
    return (
        <div className="profile-fav-author">
            {!authorListEditMode &&
                <ul id="fav-author-list">
                    <li>{favAuthorObj.favoriteAuthor}</li>
                </ul>}
            {authorListEditMode &&
                (<form onSubmit={onSubmitEditedFavAuthor}>
                    <input onChange={onChange} value={editedFavAuthor} type="text"
                        placeholder={favAuthorObj.favoriteAuthor} />
                    <input type="submit" value="submit change" />
                    <button id="delete-fav-author" onClick={onDeleteAuthorClick}>Delete</button>
                </form>
                )
            }
        </div>
    )
}

export default FavoriteAuthorEdit