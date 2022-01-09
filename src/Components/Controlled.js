import React, { useState } from "react";
//Controlled components have state that they reference within
export default function Controlled() {
  const [state, setState] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setState(e.target.value);
  }
  function displayMessage() {
    alert(state);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={state} />
      <button onClick={displayMessage}>Click Me!</button>
    </div>
  );
}
