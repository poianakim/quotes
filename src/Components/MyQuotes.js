import React, { useEffect, useState } from "react";
import { db } from "../fbase";
import moment from "moment";
import ContentEditable from "react-contenteditable";
import { useRouteMatch } from "react-router-dom";


const MyQuotes = ({ userObj }) => {
    const [myquotes, setMyQuotes] = useState([]);
    const getQuotes = async () => {
        await db.collection('quotes')
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .onSnapshot((shot) => {
                const quotesArr = shot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }
                ))
                setMyQuotes(quotesArr);
            })
    }

    useEffect(() => {
        getQuotes()
    })
    return (
        <div className ="profile-quote-list">
            <ul>
                {myquotes.map((quote) => (
                    <li key={quote.id}>
                        <p className="profile-created-at">{moment(quote.createdAt).format('LL')}</p>
                        <ContentEditable
                            className="profile-quote-content"
                            html={quote.quote}
                            disabled={true}
                        />
                        <div className="profile-quote-origin">
                            <p className="profile-quote-author">{quote.author}, </p>
                            <p>『{quote.title}』</p>
                            <p>p. {quote.page}</p>
                        </div>
                        <div className="comment-section">
                            <p>{quote.comment}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyQuotes