import { render } from "solid-js/web";

import "./index.scss";

import Counter from "react_remote/Counter";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: solid-host</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Counter countStart={50}/>
  </div>
);

render(App, document.getElementById("app"));
