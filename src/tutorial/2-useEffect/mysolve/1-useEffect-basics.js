import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    } else {
      document.title = document.getElementsByTagName('title')[0].textContent;
    }
  });
  console.log("render components");

  return (
    <>
      <h1>Value : {value}</h1>
      <button className="btn" onClick={() => {
        if(value > 0) {
          setValue(value - 1)
        }
      }}>Decrease</button>
      <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
    </>
  );
};

export default UseEffectBasics;
