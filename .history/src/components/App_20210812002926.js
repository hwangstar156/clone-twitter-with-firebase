import React, { useState } from "react";
import TwitRouter from "component/Router";
import firebase from "firebase/firebase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <TwitRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
