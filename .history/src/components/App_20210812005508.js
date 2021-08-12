import React, { useState } from "react";
import TwitRouter from "components/Router";
import { authService } from "firebase/fbase";
function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <TwitRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
