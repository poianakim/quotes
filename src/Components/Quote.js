import moment from "moment";
import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { Link } from "react-router-dom";
import { db } from "../fbase";

const Quote = ({ quoteObj, userObj }) => {
    const [editMode, setEditMode] = useState(false);
    const [newQuote, setNewQuote] = useState(quoteObj.quote);
    const [newAuthor, setNewAuthor] = useState(quoteObj.author);
    const [newTitle, setNewTitle] = useState(quoteObj.title);

    const onQuoteChange = (event) => {
        const { target: { value } } = event;
        setNewQuote(value);
    }
    const onDetailChange = (event) => {
        const { target: { value, name } } = event;
        if (name === "title") {
            setNewTitle(value)
        } else if (name === "author") {
            setNewAuthor(value)
        }
    }
    const onUpdateSubmit = async (event) => {
        event.preventDefault();
        await db.doc(`/quotes/${quoteObj.id}`).update({
            quote: newQuote,
            author: newAuthor,
            title: newTitle,
            updatedAt: Date.now()
        })
        setEditMode(false);
    }
    const onUpdateClick = () => {
        setEditMode(prev => !prev)
    }
    const onDeleteQuoteClick = async () => {
        const conmsg = window.confirm('Are you sure about deleting this quote?')
        if (conmsg) {
            await db.doc(`/quotes/${quoteObj.id}`).delete()
        } else {
            return;
        }
    }
    return (
        <div className="quotes-list" key={quoteObj.id} >
            {editMode ? (<>
                <form onSubmit={onUpdateSubmit}>
                    <ContentEditable
                        onChange={onQuoteChange}
                        className="quote-edit"
                        html={newQuote}
                    />
                    <input onChange={onDetailChange} value={newAuthor}
                        type="text" name="author" placeholder="AUTHOR" />
                    <input onChange={onDetailChange} value={newTitle}
                        type="text" name="title" placeholder="BOOK TITLE" />
                    <input type="submit" value="Save this Update" /></form>
            </>)
                : (<>

                    { userObj.uid !== quoteObj.creatorId ?
                        (
                            <Link className="link" to={`/${quoteObj.creatorId}`}>
                                <h4>{quoteObj.displayName}</h4>
                            </Link>
                        ) : (<Link className="link" to="/profile">
                            <h4>{quoteObj.displayName}</h4>
                        </Link>
                        )}

                    <p id="created-at">{moment(quoteObj.createdAt).format('LL')}</p>
                    <ContentEditable
                        className="quote-content"
                        html={quoteObj.quote}
                        disabled={true}
                    />
                    <div className="quote-origin">
                        <p id="quote-author">{quoteObj.author}, </p>
                        <p>『{quoteObj.title}』</p>
                        <p>p. {quoteObj.page}</p>
                    </div>
                    <div className="comment-section">
                        <p>{quoteObj.comment}</p>
                    </div>
                    {userObj.uid === quoteObj.creatorId &&
                        (<div className="quote-buttons"><button
                            onClick={onUpdateClick}>Update</button>
                            <button
                                onClick={onDeleteQuoteClick}> Delete</button>
                        </div>)}
                </>)}
        </div>
    )
}

export default Quote;