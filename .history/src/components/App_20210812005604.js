import React, { useState } from "react";
import TwitRouter from "components/Router";
import { authService } from "firebase/fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <div>
      <TwitRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
