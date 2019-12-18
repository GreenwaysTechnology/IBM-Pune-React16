import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'

//Return jsx
/* class App extends Component {

      render() {
            return <h1>Hello-JSX</h1>
      }
} */
//should not return undefiend
/* class App extends Component {

      render() {
            return; // undefined
      }
} */
//returns null
/* class App extends Component {

      render() {
            return null;
      }
} */
//returns string
/* class App extends Component {

      render() {
            return "Hello-String";
      }
} */
//array of primitives
/* class App extends Component {

      render() {
            //return [1, 2, 3, 4, 5]
            return ['hello', 'react', 'fiber']
      }
} */
//other primitives : numbers,boolean
/* class App extends Component {

      render() {
            //return 43;
            return true ? 'Ok' : 'Not Ok';
      }
} */
//mixing array of primitives
/* class App extends Component {

      render() {
            //return 43;
            return [true ? 'Ok' : 'Not Ok', 10, 'welcome'];
      }
} */
// const Hello = <h1>Hello!</h1>;
//Array of objects not possible
/* class App extends Component {

      render() {
            //return 43;
            return [{ id: 1, name: 'A' }];
      }
} */
//Elements
class App extends Component {

      render() {
            return React.createElement(
                  "h1",
                  null,
                  "Hello"
            );
      }
}

render(<App />, document.getElementById('root'));

