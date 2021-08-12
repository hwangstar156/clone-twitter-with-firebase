import React, { useState } from "react";
import TwitRouter from "components/Router";
import { firebase } from "firebase/firebase";
function App() {
  const auth = firebase.auth();
  console.log(auth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <TwitRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
