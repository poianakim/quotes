import React, { useState } from "react";

const Home = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const onQuoteChange = (event) => {
        const { target: { value } } = event;
        setQuote(value)
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
    }
    return (
       <div>
            <div>
            <form onSubmit={onSubmit}>
                <div className="quote-input" onChange={onQuoteChange} value={quote} contentEditable="true">
                </div>
                <input onChange={onChange} type="text" name="author" placeholder="AUTHOR"/>
                <input onChange={onChange} type="text" name="title" placeholder="BOOK TITLE" />                <br />
                <input type="submit" value="post quote" />
            </form>
        </div>
        <div>

        </div>
       </div>
    )
}

export default Home;