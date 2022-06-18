import React from 'react';

const RenderTutorial = (props) => {
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
};

export default RenderTutorial;
