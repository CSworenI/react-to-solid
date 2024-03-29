import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: react-remote</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Counter counter={100}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
