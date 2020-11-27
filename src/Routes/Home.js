import React, { useEffect, useState } from "react";
import { db } from "../fbase";
import ContentEditable from "react-contenteditable";

const Home = ({ userObj }) => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [quotes, setQuotes] = useState([]);

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
    USING ON SNAP SHOT RENDDERS ONLY ONE TIME and it makes page faster.*/
    useEffect(() => {
        // getQuotes();
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
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
        db.collection("quotes").add({
            quote, author, title,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            createdBy: userObj.displayName,
        })
        // db.collection("quotes")
        // .orderBy("createdAt", "desc");

        setQuote("");
        setAuthor("");
        setTitle("");
    }
    return (
        <div>
            <div>
                <form className="quoteform" onSubmit={onSubmit}>
                    <h4>Leave your favorite quote</h4>
                    <ContentEditable
                        className="quote-input"
                        onChange={onInputChange}
                        html={quote} />
                    <input onChange={onChange} value={author}
                        type="text" name="author" placeholder="AUTHOR" />
                    <input onChange={onChange} value={title}
                        type="text" name="title" placeholder="BOOK TITLE" />
                    <br />
                    <input type="submit" value="post quote" />
                </form>
            </div>

            <div>
                {quotes.map((qt) =>
                    (<div className="quotes-list" key={qt.id} >
                        <ContentEditable
                            className="quote-content"
                            html={qt.quote}
                            disabled={true}
                        />
                        <p>by {qt.author} from {qt.title}</p>
                        <p> - {qt.createdBy}</p>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default Home;