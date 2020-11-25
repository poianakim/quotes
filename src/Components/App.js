import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

const App = () => {
  console.log(authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return( 
   <div>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>
        &copy;Quotes {new Date().getFullYear()}
      </footer>
   </div>
    )

}

export default App;
