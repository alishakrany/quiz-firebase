import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import registerServiceWorker from "./Helpers/registerServiceWorker";

const rootElement = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
    <App />
);

// Register the service worker
registerServiceWorker();
