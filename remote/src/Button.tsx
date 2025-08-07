import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#4CAF50");

  const colors = ["#4CAF50", "#FF9800", "#2196F3", "#E91E63", "#9C27B0"];

  const handleClick = () => {
    setCount((c) => c + 1);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div style={{ padding: "10px", border: "1px dashed #ccc" }}>
      <h3>Remote Button Component</h3>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Remote Button - Clicked {count} times!
      </button>
      <input type="text" />
      <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
        Edit this component in remote/src/Button.tsx
      </p>
    </div>
  );
}

export default Button;
