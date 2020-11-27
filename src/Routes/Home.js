import React, { useState } from "react";
import { db } from "../fbase";
import ContentEditable from "react-contenteditable";

const Home = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const onInputChange = (event) => {
        setQuote(event.target.value)
    }
    const onChange = (event) =>{
        const {target :{name, value}} = event;
        if(name === "author"){
            setAuthor(value)
        } else if (name === "title") {
            setTitle(value)
        } 
    }
    const onSubmit = (event) => {
        event.preventDefault();
        db.collection("quotes").add({
            quote, author, title,
            createdAt : Date.now(),

        })
        setQuote("");
        setAuthor("");
        setTitle("");
    }
    return (
       <div>
            <div>
            <form onSubmit={onSubmit}>
                <ContentEditable 
                className="quote-input"
                onChange={onInputChange} 
                html={quote}/>
                <input onChange={onChange} value={author} 
                type="text" name="author" placeholder="AUTHOR"/>
                <input onChange={onChange} value={title} 
                type="text" name="title" placeholder="BOOK TITLE" />                
                <br />
                <input type="submit" value="post quote" />
            </form>
        </div>
        <div>

        </div>
       </div>
    )
}

export default Home;