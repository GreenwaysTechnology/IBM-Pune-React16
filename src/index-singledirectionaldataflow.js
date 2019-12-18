import React from 'react';
import { render } from 'react-dom';

function Customer(props) {
      return <div>
            <h1>Customer Details</h1>
            <h1>Id  {props.customerId}</h1>
            {/*             <Name firstName={props.firstName} lastName={props.lastName} />
            */}
            <Name {...props} />
            <ShippingAddress address={props.address} />
      </div>
}

function Name(props) {
      return <>
            <h2>firstName : {props.firstName}</h2>
            <h2>last Name : {props.lastName}</h2>
      </>
}

function ShippingAddress(props) {
      return <>
            <h3>Shipping Address</h3>
            <address>
                  <p>Street {props.address.street}</p>
                  <p>Area {props.address.area}</p>
                  <p>City {props.address.city}</p>
            </address>
      </>;
}

//default Props
Customer.defaultProps = {
      customerId: 'A001',
      firstName: 'First Name',
      lastName: 'last Name',
      address: {
            street: 'Street',
            area: 'Area',
            city: 'City'
      }
}

const App = () => {
      return <Customer />
}
render(<App />, document.getElementById('root'));