import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';



function Users() {

      const [users, setUsers] = useState({
            error: null,
            isLoaded: false,
            items: []
      });
      useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                  .then(res => res.json())
                  .then(
                        (result) => {
                              /*  this.setState({
                                     isLoaded: true,
                                     items: result.items
                               }); */

                              setUsers({ ...users, isLoaded: true, items: result })
                        },
                        // Note: it's important to handle errors here
                        // instead of a catch() block so that we don't swallow
                        // exceptions from actual bugs in components.
                        (error) => {
                              /* this.setState({
                                    isLoaded: true,
                                    error
                              }); */
                              setUsers({ ...users, isLoaded: true, error: error })
                        }
                  )
      });
      if (users.error) {
            return <div>Error: {users.error.message}</div>;
      } else if (!users.isLoaded) {
            return <div>Loading...</div>;
      } else {
            return (
                  <ul>
                        {users.items.map((user, index) => (
                              <li key={index}>
                                    {user.username} {user.email}
                              </li>
                        ))}
                  </ul>
            );
      }
}

render(<Users />, document.getElementById('root'));