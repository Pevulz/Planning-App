import React from "react";
import "./ToDo.css";
import { useState } from "react";

function ToDo() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container">
        Plans
        <div className="userInput">
          <input type="text" placeholder="To Do"></input>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default ToDo;
