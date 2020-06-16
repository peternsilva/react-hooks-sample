import React, {useReducer} from 'react';

const initialState = {count: 0}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function ReducerExample({initialCount}) {
  // We provide the hook useReducer a function, and an object representing initialState
  // It returns our new state and a dispatch function to use
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
}

export default ReducerExample;