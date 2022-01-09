import { memo } from "react";
//Keeps the component from re-render if state changes in parent
const MemoComponent = memo(function MemoComponent() {
  console.log("Print if I rendered");
  return <h4>MemoComponent</h4>;
});

export default MemoComponent;
