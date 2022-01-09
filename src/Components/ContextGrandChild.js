import React, { useContext } from "react";
import ContextValue from "./ContextValue";

export default function ContextGrandChild() {
  const value = useContext(ContextValue);
  return (
    <h1>
      Context Value is: {value[0]} {value[1]}
    </h1>
  );
}
