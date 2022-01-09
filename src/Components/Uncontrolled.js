import { useEffect, useRef } from "react";
//Not bound to a state, references the JS element directly using useRef()
export default function Uncontrolled(props) {
  //In JS setting focus is easy to set, in React the workaround is using a useRef()
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  function displayValue() {
    alert(inputRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={displayValue}>Click Me!</button>
    </div>
  );
}
