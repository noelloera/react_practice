import { useState } from "react";

export default function detectHover(Component) {
  return function (props) {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <Component hovered={hovered} {...props} />
      </div>
    );
  };
}
