import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import React from 'react';

// Huzzah for jsx!
const App = () => {
  return <h1>Hello World</h1>
}

root.render(<App />);