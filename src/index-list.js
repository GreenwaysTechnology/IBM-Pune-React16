import React from 'react';
import { render } from 'react-dom';

/* const List = props => {
      return <div>
            <ul>
                  {
                        props.numlist.map(function (item, index) {
                              return <li key={index}>{item}</li>
                        })
                  }
            </ul>
      </div>
};
 */
const List = props => <div>
      <ul>
            {
                  props.numlist.map((item, index) =>
                        <li key={index}>{item}</li>
                  )
            }
      </ul>
</div>

const CustomerList = props => <div>
      <ul>
            {
                  props.customers.map((customer, index) =>
                        <li key={index}>{customer.id} - {customer.name}</li>
                  )
            }
      </ul>
</div>

const App = () => {
      const NUMLIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const CUSTOMERS = [{ id: 1, name: 'a1' }, { id: 2, name: 'a2' }, { id: 3, name: 'a3' }]
      return <>
            <List numlist={NUMLIST} />
            <CustomerList customers={CUSTOMERS} />
      </>;
};
render(<App />, document.getElementById('root'));