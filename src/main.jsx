import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bulma/css/bulma.min.css";
// import StateFull from "./dasar/stateFull.jsx";
// import Stateless from "./dasar/Stateless.jsx";
// import LifecycleComp from "./dasar/LifecycleComp.jsx";
import Hooks from "./dasar/Hooks.jsx";
import Map from "./dasar/Map.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
