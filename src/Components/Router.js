import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import CreateAccount from "../Routes/CreateAccount";
import Home from "../Routes/Home";
import Profile from "../Routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation /> }
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj}/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj}/>
                        </Route>
                        <Redirect from="*" to="/" />
                    </>) : (<>
                    <Route exact path="/">
                        <Auth />
                    </Route>
                    <Route exact path="/createaccount">
                        <CreateAccount />
                    </Route>
                    <Redirect from="*" to="/" />
                    </>)}
            </Switch>
        </Router>
    )
}

export default AppRouter;