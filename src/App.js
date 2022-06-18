import React from "react";
import RenderTutorial from "./components/RenderTutorial";
import ErrorExample from "./tutorial/1-useState/mysolve/1-error-example";
import UseStateBasics from "./tutorial/1-useState/mysolve/2-useState-basics";
import UseStateArray from "./tutorial/1-useState/mysolve/3-useState-array";
import UseStateObject from "./tutorial/1-useState/mysolve/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/mysolve/5-useState-counter";
import UseEffectBasics from "./tutorial/2-useEffect/mysolve/1-useEffect-basics";
import UseEffectCleanup from "./tutorial/2-useEffect/mysolve/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/mysolve/3-useEffect-fetch-data";
function App() {
  return (
    <div className="container">
      <h1>Advanced Tutorial</h1>
      <br />
      <div style={{ marginBottom: "4rem" }}>
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
      <div style={{ marginBottom: "4rem" }}>
        <h1>Use Effect</h1>
        <hr />
        <RenderTutorial>
          <UseEffectBasics />
          <UseEffectCleanup />
          <UseEffectFetchData />
        </RenderTutorial>
      </div>
    </div>
  );
}

export default App;
