import React, { useState } from "react";
// import "./App.css";

import RegistrationForm from "./components/RegistrationForm";
import ShowData from "./components/ShowData";

function App() {
  const [isToken, updateIsToken] = useState(localStorage.getItem(false));

  return (
    <div className="App">
      <RegistrationForm updateIsToken={updateIsToken} />

      {isToken ? <ShowData /> : <></>}
    </div>
  );
}

export default App;
