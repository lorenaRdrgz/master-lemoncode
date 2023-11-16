import { createRoot } from "react-dom/client";
import { TextComponent } from "./text.component.js";
import { ImageComponent } from "./image.component.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <TextComponent />
    <ImageComponent />
  </div>
);

