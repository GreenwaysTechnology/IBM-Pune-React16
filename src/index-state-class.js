import React, { Component } from 'react';
import { render } from 'react-dom';


class Counter extends Component {
      state = {
            count: 0
      };
      //listener api
      increment = () => {
            /*  this.setState(function (prevState) {
                   console.log(`The Previous State ${prevState.count}`);
                   //must return new State : immutable object
                   let newValue = prevState.count + 1;
                   /* return {
                         count: newValue
                   }; */
            //  return Object.assign({}, prevState, { count: newValue });
            // return { ...prevState, count: newValue };
            // }); */
            let count = this.state.count + 1;
            this.setState({ count });
      }
      render() {
            console.log(`The Current State ${this.state.count}`);
            return <div>
                  <h1>Counter App</h1>
                  <h2>Counter : {this.state.count}</h2>
                  <button onClick={this.increment}>increment</button>
            </div>
      }
}
render(<Counter />, document.getElementById('root'));