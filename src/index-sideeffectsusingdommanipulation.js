import React, { Component } from 'react';
import { render } from 'react-dom';

//Side effects using old react style

class Customer extends Component {
      state = {
            screen: 'Customer Manager App'
      }
      add = () => {
            this.setState({ screen: 'Customer Manager App - Add ' })
      }
      render() {
            return <div>
                  <h1>Customer Manager App: using Side effects</h1>
                  <button onClick={this.add} >Add</button>
            </div>
      }
      //side effeects with inital / mount cycle
      componentDidMount() {
            //imperative dom
            document.title = this.state.screen;
      }
      //side effects with update cycle
      componentDidUpdate() {
            document.title = this.state.screen;
      }
}

render(<Customer />, document.getElementById('root'));