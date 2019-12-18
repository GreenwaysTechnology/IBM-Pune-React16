import React, { useState } from 'react';
import { render } from 'react-dom';


function Counter(props) {
      const [count, setCount] = useState(0);
      return <div>
            <h1>Counter App</h1>
            <h2>Counter : {count}</h2>
            {/*  <button onClick={() => setCount(count + 1)}>increment</button> */}
            <button onClick={() => setCount(prevState => {
                  console.log(`Previouse State ${prevState}`)
                  return prevState + 1
            })}>
                  increment
          </button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
}


render(<Counter />, document.getElementById('root'));