import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('🎯 Main.tsx loaded');

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('❌ Root element not found!');
} else {
  console.log('✅ Root element found, rendering App...');
  createRoot(rootElement).render(<App />);
  console.log('✅ App rendered');
}
