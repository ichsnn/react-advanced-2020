import React from 'react';

const RenderTutorial = (props) => {
    return (
        <div>
            {props.children.map((child) => {
                return (
                    <div>
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
