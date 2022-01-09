//List and Item count are sibling components that both share the items state from parent
export default function List(props) {
  return props.items.map((item, i) => {
    return (
      <h1
        key={item.id}
        onClick={() => {
          props.delete(item.id);
        }}
      >
        {item.number}
      </h1>
    );
  });
}
