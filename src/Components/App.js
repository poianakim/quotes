import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService, db } from "../fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const getProfiles = async() => {
    await db.collection("profiles")
            .onSnapshot((snapshot) => {
                const profilesDb = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setProfiles(profilesDb);
            })
  }
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false)
      }
      setInit(true);
    });
    getProfiles()
  }
  , []);

  return (
    <div className="container">
      <h1 className="appTitle">"Quotes"</h1>
      {init ? <AppRouter profiles={profiles} userObj={userObj} isLoggedIn={isLoggedIn} /> : "Inizializing"}
      <footer>
        &copy;"Quotes" {new Date().getFullYear()}
      </footer>
    </div>
  )

}

export default App;
