import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  })

  const changeMessage = () => {
    let message = person.message === 'random message' ? 'hello world' : 'random message';
    setPerson({...person, message: message});
  }

  return <React.Fragment>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>{person.message}</h4>
    <button type='button' className='btn' onClick={changeMessage}>
      Change Message
    </button>
  </React.Fragment>;
};

export default UseStateObject;
