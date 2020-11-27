import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

const App = () => {  
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true)
      } else{
        setIsLoggedIn(false)
      }
      setInit(true);
    });
  },[]);
  return( 
   <div>
     <h1>"Quotes"</h1>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Inizializing"}
      <footer>
        &copy;"Quotes" {new Date().getFullYear()}
      </footer>
   </div>
    )

}

export default App;
