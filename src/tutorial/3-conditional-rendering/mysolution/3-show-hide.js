import React, { useState } from "react";
import UseEffectCleanup from "../../2-useEffect/mysolve/2-useEffect-cleanup";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show && <UseEffectCleanup />}
    </>
  );
};

export default ShowHide;
