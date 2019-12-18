import React, { useReducer } from 'react';
import { render } from 'react-dom';
// import { INCREMENT, DECREMENT } from './actionconstants/counterconstants';
import { INCREMENT, DECREMENT } from './actionconstants'
//-import { counterReducer } from './reducers/counterreducer';
import { counterReducer } from './reducers'

const initialState = { count: 0 };

//container
/**
 * subscribe state from bizlogic(reducer,redux)
 */
function Counter() {
      const [state, dispatch] = useReducer(counterReducer, initialState);
      return <div>
            <CounterView {...state} dispatch={dispatch} />
      </div>
}
//view
function CounterView(props) {
      const { dispatch } = props;
      return <>
            <h1>Counter App with Reducer</h1>
            <h1>Count : {props.count}</h1>
            <button onClick={() => { dispatch({ type: INCREMENT }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: DECREMENT }) }}>Decrement</button>
      </>
}

render(<Counter />, document.getElementById('root'));