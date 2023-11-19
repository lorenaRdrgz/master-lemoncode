import React from "react";
import { createRoot } from "react-dom/client";
import { TextComponent } from "./text.component.js";
import "./styles.scss";
import logo from "./assets/logo_1.png";


const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <TextComponent />
    <img src={logo} style={{ width: 150 }} />
  </div>
);

