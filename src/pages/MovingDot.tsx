import { useState, useEffect } from "react";
let count = 0;
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(count);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        border: "1px solid black",
        position: "relative",
        width: 500,
        height: 300,
      }}>
      {count++}
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -470,
          top: -70,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
