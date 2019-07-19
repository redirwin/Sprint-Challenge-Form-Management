import React, { useState } from "react";
import "./App.css";

import RegistrationForm from "./components/RegistrationForm";
import ShowData from "./components/ShowData";

function App() {
  const [isToken, updateIsToken] = useState(localStorage.getItem(false));
  // const [data, updateData] = useState([]);
  return (
    <div>
      {isToken ? (
        <ShowData />
      ) : (
        <RegistrationForm updateIsToken={updateIsToken} />
      )}
    </div>
  );
}

export default App;
