import React, { useReducer } from 'react';
import { render } from 'react-dom';
// import { INCREMENT, DECREMENT } from './actionconstants/counterconstants';
import { INCREMENT, DECREMENT } from './actionconstants'
//-import { counterReducer } from './reducers/counterreducer';
import { counterReducer } from './reducers'


const initialState = { count: 0 };
function Counter() {
      const [state, dispatch] = useReducer(counterReducer, initialState);

      //increment logic
      function increment() {
            dispatch({ type: INCREMENT })
      }
      return <div>
            <h1>Counter App with Reducer</h1>
            <h1>Count : {state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => { dispatch({ type: DECREMENT }) }}>Decrement</button>
      </div>
}

render(<Counter />, document.getElementById('root'));