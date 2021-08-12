import React, { useState } from "react";
import TwitRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <TwitRouter isLoggedIn />
    </div>
  );
}

export default App;
