import React from "react";
import { createRoot } from "react-dom/client";
import { Slide } from "./screens/slides";
import "./screens/slides/style.css";

const container = document.getElementById("app");
const root = createRoot(container);

function App() {
  React.useEffect(() => {
    const updateScale = () => {
      const scale = Math.min(window.innerWidth / 1920, 1);
      document.documentElement.style.setProperty('--scale', scale);
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center",
      width: "100%",
      overflow: "hidden",
    }}>
      <Slide />
    </div>
  );
}

root.render(<App />);
