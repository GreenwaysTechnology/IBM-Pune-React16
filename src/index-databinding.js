import React from 'react';
import { render } from 'react-dom'


const name = 'Ram!';
const status = true;

function getDepartment() {
      return 'Sales'
}

const Employee = () => {
      return <div>
            <h1>Employee Details</h1>
            <p>Employee Id : {1}</p>
            <p>Name : {name}</p>
            <p>Status : {status ? "Active" : "Inactive"}</p>
            <p>Department {getDepartment()}</p>
      </div>
};

render(<Employee />, document.getElementById('root'));