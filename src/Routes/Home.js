import React, { useEffect, useState } from "react";
import { authService, db } from "../fbase";
import ContentEditable from "react-contenteditable";
import Quote from "../Components/Quote";

const Home = ({ userObj, profiles }) => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [quotes, setQuotes] = useState([]);
    const [page, setPage] = useState("");
    const [comment, setComment] = useState("");
    const setProfiles = async () => {
        const userUid = authService.currentUser.uid;
        const displayName = authService.currentUser.displayName;
        const email = authService.currentUser.email;
        await db.collection('profiles').doc(userUid).set({
            email, userUid, displayName,
        })
    }
    useEffect(() => {
       setProfiles();
        db.collection("quotes").orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                const quotesArr = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setQuotes(quotesArr);
            })
    }, [])
    const onInputChange = (event) => {
        setQuote(event.target.value)
    }
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "author") {
            setAuthor(value)
        } else if (name === "title") {
            setTitle(value)
        } else if (name === "page") {
            setPage(value)
        } else if (name === "comment") {
            setComment(value)
        }
    }
    const onSubmit = (event) => {
        const confmsg = window.confirm('Do you want to post this quote?')
        if (confmsg) {
            event.preventDefault();
            db.collection("quotes").add({
                quote, author, title, page, comment,
                createdAt: Date.now(),
                creatorId: userObj.uid,
                displayName: userObj.displayName,
            })
            setQuote("");
            setAuthor("");
            setTitle("");
            setPage("");
            setComment("");
        } else {
            return;
        }
    }
    return (
        <div className="container">
            <span className="share-quotes-label">📖 Share Your Favorite Quotes 🖋</span>
            <form onSubmit={onSubmit}>
                <ContentEditable
                    className="quote-input"
                    onChange={onInputChange}
                    html={quote}
                />
                <div className="row input-detail">
                    <input className="col-xs-6 col-md-3" id="author-input" onChange={onChange} value={author}
                        type="text" name="author" placeholder="AUTHOR" />
                    <input className="col-xs-8 col-md-6" id="title-input" onChange={onChange} value={title}
                        type="text" name="title" placeholder="BOOK TITLE" />
                    <input className="col-xs-4 col-md-2" id="page-input" onChange={onChange} value={page}
                        type="text" name="page" placeholder="PAGE"/>
                </div>
                <br />
                <div className="row input-personal">
                    <input className="col-xs-12 col-md-10" id="comment-input" onChange={onChange} type="text" placeholder="COMMENT"
                        name="comment" value={comment} maxLength={140} />
                    <input className="col-xs-6 col-md-1" id="quote-submit" type="submit" value="post" />
                </div>
            </form>
            <div className="row">
                {quotes.map((qt) => (
                    <Quote key={qt.id} quoteObj={qt} userObj={userObj} />
                ))}
            </div>
        </div>
    )
}

export default Home;


/* **OLD VERSION AND RE RENDER SEVERL TIMES
   const getQuotes = async () => {
       const quotesdb = await db.collection("quotes")
           .orderBy("createdAt", "asc")
           .get();
       quotesdb.forEach((document) => {
           const quoteObj = {
               ...document.data(),
               id: document.id,
           }
           setQuotes((prev) => [quoteObj, ...prev]);
       });
   }
   USING ON SNAP SHOT RENDDERS ONLY ONE TIME and it makes page faster and it funcions in realtime!!.*/