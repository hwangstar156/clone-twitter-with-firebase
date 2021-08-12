import React, { useState } from "react";
import TwitRouter from "components/Router";
import { authService } from "firebase/firebase";
function App() {
  console.log(authService);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <TwitRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
