import React from "react";

const RenderTutorial = (props) => {
  if (props.children.length > 1) {
    return (
      <div>
        {props.children.map((child, index) => {
          return (
            <div key={index}>
              {child}
              <br />
              <br />
              <hr />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
};

export default RenderTutorial;
