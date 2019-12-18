import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';


class Table extends React.Component {
      render() {
            return (
                  <table>
                        <tr>
                              <Columns />
                        </tr>
                  </table>
            );
      }
}
class Columns extends React.Component {
      render() {
            return (
                  <>
                        <td>Hello</td>
                        <td>World</td>
                  </>
            );
      }
}


//
const Header = () => <h1>Header</h1>;
const Footer = () => <h1>Footer</h1>;
const Body = () => <Table />;

//component composition
/* const Layout = () => <div>
      <Header />
      <Body />
      <Footer />
</div>; */
//with React.Fragement
/* const Layout = () => <React.Fragment>
      <Header />
      <Body />
      <Footer />
</React.Fragment>; */
//Short cut Fragment
/* const Layout = () => <Fragment>
      <Header />
      <Body />
      <Footer />
</Fragment>; */



//Without Fragment keywords
const Layout = () => <>
      <Header />
      <Body />
      <Footer />
</>;

render(<Layout />, document.getElementById('root'));
