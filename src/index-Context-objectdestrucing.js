import React, { Component } from 'react';
import { render } from 'react-dom';


//create context object and store inside a variable called "ThemeContext"
const { Provider, Consumer } = React.createContext('dark');

//with context
class App extends Component {
      //Global data /Shared data
      theme = {
            "backgroundColor": "red",
            "color": "white"
      }
      render() {
            return <Provider value={this.theme}>
                  <Toolbar />
            </Provider>
      }
}
function Toolbar(props) {
      return (
            <div>
                  <ThemedButton />
            </div>
      );
}

function ThemedButton(props) {
      return <Consumer>
            {theme => <Button label="IBM" theme={theme} />}
      </Consumer>;
}
function Button(props) {
      return <button style={props.theme}>{props.label}</button>
}

render(<App />, document.getElementById('root'));


