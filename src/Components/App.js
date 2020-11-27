import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

const App = () => {  
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true)
      } else{
        setIsLoggedIn(false)
      }
      setInit(true);
      setUserObj({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      })
      console.log(userObj);
    });
  },[]);
  return( 
   <div>
     <h1>"Quotes"</h1>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "Inizializing"}
      <footer>
        &copy;"Quotes" {new Date().getFullYear()}
      </footer>
   </div>
    )

}

export default App;
