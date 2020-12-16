import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import CreateAccount from "../Routes/CreateAccount";
import Home from "../Routes/Home";
import MyProfile from "../Routes/MyProfile";
import Profile from "../Routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ profiles, isLoggedIn, userObj }) => {
    const profile = profiles.map((profile) => (
        <Route key={profile.id} path={`/${profile.id}`}>
            <Profile profile={profile} userObj={userObj}/>
        </Route>
    ))

    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home 
                            userObj={userObj}
                            profiles={profiles} />
                        </Route>
                        {profile}
                        {/* <Route >
                            <Profile />
                        </Route> */}

                        <Route exact path="/profile">
                            <MyProfile userObj={userObj} />
                        </Route>
                        {/* <Redirect from="*" to="/" /> */}
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