import React, { useState } from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import App from './App';


const HelloWorld = () => {
  return <div>
    <h1>HelloWorld</h1>
  </div>
}

const Counter = () => {
  const [count, setCount] = useState(10);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function decrementasync() {
    setTimeout(() => setCount(count - 1), 260);
  }
  return <div>
    <span data-testid='count'>{count}</span>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={decrementasync}>decrementasync</button>

  </div>
}

//tear down process: clean up process

afterEach(cleanup)


test('My test Case', () => {
  console.log('my first test')
});


test('App Component Link Test', function () {
  //get DOM Query Selector api in order to Query dom nodes
  const { getByText } = render(<App />);
  //get DOM node
  const linkElement = getByText(/learn react/i);
  //Assertions
  expect(linkElement).toBeInTheDocument();
})

test('renders HelloWorld', function () {
  const { getByText } = render(<HelloWorld />);
  const headerElement = getByText(/Hello/i);
  expect(headerElement).toBeInTheDocument();
});
test('H1 innerHTML should be HelloWorld', function () {
  const { getByText } = render(<HelloWorld />);
  const headerElement = getByText(/Hello/i);
  expect(headerElement.innerHTML).toEqual('HelloWorld')
});

test('Counter should show inital count', function () {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('count')).toHaveTextContent('10')
});

test('Counter should incremement count', function () {
  const { getByTestId, getByText } = render(<Counter />);
  fireEvent.click(getByText('increment'))
  expect(getByTestId('count')).toHaveTextContent('11')
});
test('Counter should decrement count', function () {
  const { getByTestId, getByText } = render(<Counter />);
  fireEvent.click(getByText('decrement'))
  expect(getByTestId('count')).toHaveTextContent('9')
});
//Async
it('Counter should decrement  count async', async function () {
  const { getByText } = render(<Counter />);
  fireEvent.click(getByText('decrementasync'))
  const countspan = await waitForElement(() => getByText('9'))
  expect(countspan).toHaveTextContent('9')
});