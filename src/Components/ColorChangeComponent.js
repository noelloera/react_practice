import detectHover from "./detectHover";
function ColorChangeComponent(props) {
  const style = { backgroundColor: props.hovered ? "lightgray" : "" };
  return (
    <div style={style}>
      <h3>Example of Higher Order Components</h3>
      <h3>Will change on mouse over</h3>
    </div>
  );
}

export default detectHover(ColorChangeComponent);
