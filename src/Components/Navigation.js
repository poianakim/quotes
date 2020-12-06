import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({userObj}) => {
    return (
        <ul className="navigation">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/profile" >MyProfile</Link></li>
        </ul>
    )

}

export default Navigation;