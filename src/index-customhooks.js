import React, { useState, useEffect, useContext } from 'react';
import { render } from 'react-dom';
import { useWindowWidth } from './windowhooks/usewindowWidthHook';
import { ThemeContext } from './globaldata/themecontext';

function Customer(props) {
      const [screen, setScreen] = useState('Customer Manager App');
      const width = useWindowWidth();
      const theme = useContext(ThemeContext);
      //Performing side effects
      useEffect(function () {
            document.title = screen;
      });

      function changeTitle() {
            setScreen('Customer Manager App -Add');
      }

      return <div style={theme}>
            <h1>Customer Manager App: Function using Side effects</h1>
            <button onClick={changeTitle} >Add</button>
            <h2>Current Window width {width}</h2>

      </div>
}





render(<Customer />, document.getElementById('root'));