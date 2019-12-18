import React, { useMemo, useState, useEffect } from 'react';
import { render } from 'react-dom';

function Counter() {

      const [count, setCount] = useState(1);
      const MemoziedCounterDisplay = useMemo(function () {
            return <CounterDisplay  ></CounterDisplay>

      }, []);
      return <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>Normal Render</h1>
            <CounterDisplay />
            <h1>Memo Render</h1>
            {MemoziedCounterDisplay}
      </div>
}
let renderCount = 1
function CounterDisplay() {
      useEffect(() => {
            renderCount++;
      });
      return <h1>Render Count : {renderCount}</h1>
}

render(<Counter />, document.getElementById('root'));