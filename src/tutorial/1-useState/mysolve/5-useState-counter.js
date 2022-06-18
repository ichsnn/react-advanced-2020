import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue = 0;
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000)
  }

  return <React.Fragment>
    <section>
      <h3>Regular Counter</h3>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className='btn' onClick={reset}>
        Reset
      </button>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </section>
    <section style={{marginTop: '1rem'}}>
      <h3>More Complex Counter</h3>
      <h2>{value}</h2>
      <button className='btn' onClick={complexIncrease}>
        Increase Later
      </button>
    </section>
  </React.Fragment>;
};

export default UseStateCounter;
