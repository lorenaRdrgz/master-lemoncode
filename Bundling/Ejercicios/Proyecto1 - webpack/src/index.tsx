import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./content/logo_1.png";
import "./styles.scss";
import { TextComponent } from "./text.component";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <TextComponent />
    <img src={logo} style={{ width: 150 }} />
  </div>
);