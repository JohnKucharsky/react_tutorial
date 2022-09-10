interface backgroundProps {
  position: {
    x: number;
    y: number;
  };
}

export default function Background(p: backgroundProps) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(
        ${p.position.x}px,
        ${p.position.y}px
      )`,
        width: 250,
        height: 250,
        backgroundColor: "rgba(200, 200, 0, 0.2)",
      }}
    />
  );
}
