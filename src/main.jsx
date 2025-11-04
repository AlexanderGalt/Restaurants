import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { App } from "/src/app/App.jsx";
import "./app/null.css";

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, document.getElementById("root"));
const root = createRoot(rootElement);
root.render(<App />);

// console.dir(root);
