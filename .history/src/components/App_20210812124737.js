import React, { useEffect, useState } from "react";
import TwitRouter from "components/Router";
import { authService } from "firebase/fbase";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //유저의 로그인 여부 확인!
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <div>
      {init ? <TwitRouter isLoggedIn={isLoggedIn} /> : "initializing...."}
    </div>
  );
}

export default App;
