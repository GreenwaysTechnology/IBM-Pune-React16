import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './actionconstants'


//reducer :pure function
function counterReducer(state = { count: 10 }, action) {
      console.log(`Previous state ${state.count}`)
      console.log(`action`)
      console.log(action)
      switch (action.type) {
            case INCREMENT:
                  //pure function: biz logic
                  let count = state.count + 1;
                  return {
                        ...state, count
                  };
            case DECREMENT:
                  //pure function: biz logic
                  return {
                        ...state, count: state.count - 1
                  };
            default:
                  return state;
      }
}

const store = createStore(counterReducer);

////////////////////////////////////////////////////////////////////////////
//react-redux configuration

//stateMapper
function mapStateToProps(state) {
      let { count } = state;
      //configuration object
      return {
            //key:value: key-prop:value is state
            //count: count
            count
      }
}


/////////////////////////////////////////////////////////////////////////////React
//Container Component
function Counter(prop) {
      return (<div>
            <h1>React-Redux-CounterApp</h1>
            <h1>Count : {prop.count}</h1>
            <button onClick={() => prop.dispatch({ type: INCREMENT })}>
                  Increment
            </button>
            <button onClick={() => prop.dispatch({ type: DECREMENT })}>
                  Decrement

            </button>
      </div>)
}
const CounterContainer = connect(mapStateToProps)(Counter);

const App = () => {

      return <Provider store={store}>
            <CounterContainer />
      </Provider>;
}

render(<App />, document.getElementById('root'));