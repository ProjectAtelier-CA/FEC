import { createRoot } from "react-dom/client";
import React from 'react';
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  return <h1>Hello World</h1>
}

root.render(<App />);