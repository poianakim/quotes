import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
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
        if(name === "title") {
            setNewTitle(value)
        } else if (name === "author") {
            setNewAuthor(value)
        }
    }
    const onUpdateSubmit = async (event) => {
        event.preventDefault();
        console.log('newquote', newQuote);
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
        <div>
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
                        <ContentEditable
                            className="quote-content"
                            html={quoteObj.quote}
                            disabled={true}
                        />
                        <p>by {quoteObj.author} from {quoteObj.title}</p>
                        <p> - {quoteObj.createdBy}</p>
                        {userObj.uid === quoteObj.creatorId &&
                            (<><button
                                onClick={onUpdateClick}>Update this Quote</button>
                                <button
                                    onClick={onDeleteQuoteClick}> Delete this Quote</button>
                            </>)}
                    </>)}
            </div>
        </div>
    )
}

export default Quote;