import React, { useEffect, useState } from "react";
import TwitRouter from "components/Router";
import { authService } from "firebase/fbase";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //유저의 로그인 여부 확인!
  useEffect(() => {
    authService.onAuthStateChanged((user) => console.log(user));
  }, []);
  return (
    <div>
      <TwitRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
