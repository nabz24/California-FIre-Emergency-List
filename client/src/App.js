import React from "react";
import Main from "./views/Main";
import { Router } from "@reach/router";
import Show from "./views/Show";
import Update from "./views/Update";

function App() {
  return (
    <Router>
      <Main path="/products" default />
      <Show path="/product/:id" />
      <Update path="/product/edit/:id" />
    </Router>
  );
}

export default App;
