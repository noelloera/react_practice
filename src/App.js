import React, { useState } from "react";
import "./App.css";
//Imports of Components
import ContextValue from "./Components/ContextValue";
import ContextChild from "./Components/ContextChild";
import Child from "./Components/Child";
import List from "./Components/List";
import ItemCount from "./Components/ItemCount";
import Uncontrolled from "./Components/Uncontrolled";
import Controlled from "./Components/Controlled";
import ColorChangeComponent from "./Components/ColorChangeComponent";
import DetectHover from "./Components/DetectHoverRender";
import useHover from "./Components/useHover";
import NumberCounter from "./Components/NumberCounter";
import MemoComponent from "./Components/MemoComponent";
//Passes props down to grandchild which reflects the grandparent state data
const data = [];
for (let i = 0; i < 7; i++) {
  data.push({
    number: i,
    id: "id" + i,
  });
}

//Lifting state up allows for state data to be shared with all its children components
function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(data);
  //Created useHover hook
  const [hoverRef, hovered] = useHover();
  const style = {
    backgroundColor: hovered ? "pink" : "",
  };
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  function deleteItem(id) {
    const newData = items.filter((num) => num.id !== id);
    setItems(newData);
  }
  function render(hovered) {
    const style = {
      backgroundColor: hovered ? "orange" : "",
    };
    return (
      <div style={style}>
        <h3>Example of a render prop component</h3>
        <h3>Will change on mouse over</h3>
      </div>
    );
  }
  return (
    <div className="App">
      <h4>Direct data Flow</h4>
      <h4>Parent</h4>
      <input type="text" value={value} onChange={handleChange} />
      <Child value={value} onChange={handleChange} />
      <h1>{value}</h1>
      <ContextValue.Provider value={["hello", "world"]}>
        <ContextChild />
      </ContextValue.Provider>
      <List items={items} delete={deleteItem} />
      <ItemCount count={items.length} />
      <Controlled />
      <Uncontrolled />
      <ColorChangeComponent />
      <DetectHover render={render} />
      <div ref={hoverRef} style={style}>
        <h3>Example of custom hover hook</h3>
        <h3>Will change on mouse over</h3>
      </div>
      <NumberCounter />
      <MemoComponent />
    </div>
  );
}

export default App;
