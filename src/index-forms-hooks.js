import React, { useState } from 'react';
import { render } from 'react-dom';


function Form() {
      const firstNameRef = useFirstName('Subramanian')
      const lastNameRef = useLastName('Murugan');
      const [submitted, setSubmitted] = useState(false);
      const handleSubmit = (e) => {
            e.preventDefault();
            let data = {
                  firstName: firstNameRef.firstName,
                  lastName: lastNameRef.lastName
            }
            setSubmitted(true);
            alert(JSON.stringify(data));
      };

      return <div>
            <h1>Form</h1>
            <h3>{firstNameRef.firstName} {lastNameRef.lastName}</h3>
            <form onSubmit={handleSubmit}>
                  <div>
                        First Name :<input {...firstNameRef} value={firstNameRef.firstName} />
                  </div>
                  <div>
                        Last Name :<input {...lastNameRef} value={lastNameRef.lastName} />
                  </div>
                  <div>
                        <input type="submit" value="Submit" />
                  </div>
            </form>

      </div>
}
const useFirstName = (initialValue) => {
      const [firstName, setFirstName] = useState(initialValue);
      const handleChange = e => {
            setFirstName(e.target.value);
      }
      return {
            firstName,
            onChange: handleChange
      };

}

const useLastName = (initialValue) => {
      const [lastName, setLastName] = useState(initialValue);
      const handleChange = e => {
            setLastName(e.target.value);
      }
      return {
            lastName,
            onChange: handleChange
      };

};


render(<Form />, document.getElementById('root'));
