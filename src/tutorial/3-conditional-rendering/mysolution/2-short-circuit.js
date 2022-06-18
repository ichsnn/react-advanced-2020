import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          text === "Ichsan N" ? setText("") : setText("Ichsan N");
        }}
      >
        Text
      </button>
      <h2>{text || "john doe"}</h2>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? <p>There is an error</p> : <p>There is no error</p>}
    </>
  );
};

export default ShortCircuit;
