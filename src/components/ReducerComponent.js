import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      return { ...state, number: state.number + 1 };
    }
    case "toggleDisplay": {
      return { ...state, displayText: !state.displayText };
    }
    default:
      return state;
  }
};

export default function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, {
    number: 0,
    displayText: true,
  });
  return (
    <div>
      <h4>Reducer Component:</h4>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "toggleDisplay" });
        }}
      >
        Click me to Increment
      </button>
      <h4>{state.number}</h4>
      {state.displayText ? <h4>only displays when true</h4> : ""}
    </div>
  );
}
