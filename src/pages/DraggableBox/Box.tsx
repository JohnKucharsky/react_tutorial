import { useState, PointerEvent } from "react";

interface boxProps {
  position: {
    x: number;
    y: number;
  };
  color: string;
  onMove: (dx: number, dy: number) => void;
  children: string;
}

interface lastCoordinatesProps {
  x: number;
  y: number;
}

export default function Box(p: boxProps) {
  const [lastCoordinates, setLastCoordinates] =
    useState<lastCoordinatesProps | null>(null);

  function handlePointerDown(e: PointerEvent) {
    console.log("handlePointerDown", e.clientX);
    (e.target as Element).setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: PointerEvent) {
    console.log("handlePointerMove", e.clientX);
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      p.onMove(dx, dy);
    }
  }

  function handlePointerUp(e: PointerEvent) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: p.color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
          ${p.position.x}px,
          ${p.position.y}px
        )`,
      }}>
      {p.children}
    </div>
  );
}
