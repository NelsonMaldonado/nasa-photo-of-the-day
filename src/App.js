import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";


function App() {
  const [nasaPic, setNasaPic] = useState("")


  return (
    <div className="App">
      <p>
        This should be an image ${nasaPic} <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
