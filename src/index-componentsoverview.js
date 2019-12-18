import React from 'react';
import { render } from 'react-dom';


//variable pattern
/* const HelloWorld = <h1>Hello World</h1>;
render(HelloWorld, document.getElementById('root')); */
//functions

/* function HelloWorld() {
      return <h1>Hello World</h1>; //React.createElement(...)
} */
//const HelloWorld = () => <h1>Hello World!</h1>;

class HelloWorld extends React.Component {
      render() {
            return <h1>HelloWorld</h1>
      }
}

//render(HelloWorld(), document.getElementById('root'));
render(<HelloWorld />, document.getElementById('root'));