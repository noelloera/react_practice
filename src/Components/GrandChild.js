export default function GrandChild(props) {
  return (
    <div>
      <h4>Unidirectional Data Flow</h4>
      <h4>Granparent > Child > Grandchild</h4>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
}
