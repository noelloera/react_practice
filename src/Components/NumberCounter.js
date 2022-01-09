//Example of using a useEffect() hook as componentDidMount() and componentDidUpdate()

import { useEffect, useState } from "react";

export default function NumberCounter() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("you updated the number, triggering an update to component");
    //If you needed cleanup with a componentDidUnmount() just add a return function
  }, [number]);
  return (
    <div>
      <h3>
        Example of useEffect being used as componentDidMount(),
        componentDidUpdate()
      </h3>
      <button
        onClick={() => {
          setNumber((n) => {
            return n + 1;
          });
        }}
      >
        Click me to increase count
      </button>
      <h3>current amount of clicks: {number}</h3>
    </div>
  );
}
