import React from "react";
import RenderTutorial from "./components/RenderTutorial";
import ErrorExample from "./tutorial/1-useState/mysolve/1-error-example";
import UseStateBasics from "./tutorial/1-useState/mysolve/2-useState-basics";
import UseStateArray from "./tutorial/1-useState/mysolve/3-useState-array";
import UseStateObject from "./tutorial/1-useState/mysolve/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/mysolve/5-useState-counter";
function App() {
  return (
    <div className="container">
      <h1>Advanced Tutorial</h1>
      <br />
      <div>
        <h1>Use State</h1>
        <hr />
        <RenderTutorial>
          <ErrorExample />
          <UseStateBasics />
          <UseStateArray />
          <UseStateObject />
          <UseStateCounter />
        </RenderTutorial>
      </div>
    </div>
  );
}

export default App;
