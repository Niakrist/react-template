import React from "react";
import { createRoot } from "react-dom/client";
import Module from "./Module";
import "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Hello, React!</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fugit
      corporis impedit? Consequuntur iusto quibusdam cum! Architecto repellat
      quidem magnam cum! At sit ea ducimus sint, culpa quam architecto
      asperiores.
    </p>
    <Module />
  </>
);
