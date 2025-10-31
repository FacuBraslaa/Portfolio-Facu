import React from "react";
import { createRoot } from "react-dom/client";
import { Slide } from "./screens/slides";
import "./screens/slides/style.css";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center",
      width: "100%",
      overflowX: "auto",
      minWidth: "100vw"
    }}>
      <Slide />
    </div>
  );
}

root.render(<App />);
