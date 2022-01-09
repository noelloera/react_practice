import GrandChild from "./GrandChild";
export default function Child(props) {
  return <GrandChild value={props.value} onChange={props.onChange} />;
}
