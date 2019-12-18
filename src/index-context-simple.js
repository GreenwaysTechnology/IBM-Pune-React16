import React, { Component } from 'react';
import { render } from 'react-dom';


//create context object and store inside a variable called "ThemeContext"
const ThemeContext = React.createContext('dark');

//with context
class App extends Component {
      theme = {
            "backgroundColor": "red",
            "color": "white"
      }
      render() {
            return <ThemeContext.Provider value={this.theme}>
                  <Toolbar />
            </ThemeContext.Provider>
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
      return <ThemeContext.Consumer>
            {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>;
}
function Button(props) {
      return <button style={props.theme}>Theme</button>
}

render(<App />, document.getElementById('root'));


