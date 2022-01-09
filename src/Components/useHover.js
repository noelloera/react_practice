//Creating custom hooks allow for reusability without wrapping
import { useEffect, useState, useRef } from "react";
//Creating a hook
export default function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => {
    setValue(true);
  };
  const handleMouseOut = () => {
    setValue(false);
  };
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return [ref, value];
}
