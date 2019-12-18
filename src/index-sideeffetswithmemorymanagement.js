import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';



function Customer(props) {

      const [screen, setScreen] = useState('Customer Manager App');
      //declarating variable to hold current window width
      const [width, setWidth] = useState(window.innerWidth);

      //Performing side effects
      useEffect(function () {
            document.title = screen;
      });

      useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            //add listener
            window.addEventListener('resize', handleResize);

            //clean up code 
            /**write a function which will be called by react internally */
            return () => {
                  window.removeEventListener('resize', handleResize);
            };

      });

      function changeTitle() {
            setScreen('Customer Manager App -Add');
      }


      return <div>
            <h1>Customer Manager App: Function using Side effects</h1>
            <button onClick={changeTitle} >Add</button>
            <h2>Current Window width {width}</h2>

      </div>
}

render(<Customer />, document.getElementById('root'));