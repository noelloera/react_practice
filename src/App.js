import React, { useState } from "react";
import "./App.css";
//Imports of Components
import ContextValue from "./components/ContextValue";
import ContextChild from "./components/ContextChild";
import Child from "./components/Child";
import List from "./components/List";
import ItemCount from "./components/ItemCount";
import Uncontrolled from "./components/Uncontrolled";
import Controlled from "./components/Controlled";
import ColorChangeComponent from "./components/ColorChangeComponent";
import DetectHover from "./components/DetectHoverRender";
import useHover from "./components/useHover";
import NumberCounter from "./components/NumberCounter";
import MemoComponent from "./components/MemoComponent";
import ReducerComponent from "./components/ReducerComponent";
//Acesssing the data from store
import { useSelector, useDispatch } from "react-redux";
//Bind action Creators using redux
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
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
  //useSelector allows to access values over state
  const account = useSelector((state) => state.account);
  //useDispatch allows to modify values over states
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
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
      <ReducerComponent />
      <h4>Current amount in Bank Account:</h4>
      <h4>(using redux to store global state))</h4>
      <h4>{account}</h4>
      <h4>(triggers action creators)</h4>
      <button
        onClick={() => {
          depositMoney(10);
        }}
      >
        Deposit $10
      </button>
      <button
        onClick={() => {
          withdrawMoney(10);
        }}
      >
        Withdraw $10
      </button>
    </div>
  );
}

export default App;
