import React, { useState } from "react";
import "./App.css";

import RegistrationForm from "./components/RegistrationForm";
import ShowData from "./components/ShowData";

function App() {
  const [isToken, updateIsToken] = useState();
  const [data, updateData] = useState([]);
  return (
    <div>
      <RegistrationForm />
      <ShowData />
    </div>
  );
}

export default App;
