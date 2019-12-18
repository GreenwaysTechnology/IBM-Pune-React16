import React, { Component } from 'react';
import { render } from 'react-dom'


/* function Header(props) {
      //props.title = 'google';
      return <div>
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
      </div>;
} */
/* const Header = props => {
      return <div>
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
      </div>;
} */
/* const Header = props => <div>
      <h1>{props.title}</h1>
      <h2>{props.location}</h2>
</div>; */

/* const Header = props => {
      const { title, location } = props;
      return <div>
            <h1>{title}</h1>
            <h2>{location}</h2>
      </div>
} */

class Header extends Component {
      render() {
            console.log(this.props)
            const { title, location } = this.props;
            return <div>
                  <h1>{title}</h1>
                  <h2>{location}</h2>
            </div>
      }
}
//default Props
Header.defaultProps = {
      title: 'default title',
      location: 'default location'
}

const App = () => {
      return <>
            <Header />
            <hr />
            <Header title='IBM' />
            <hr />
            <Header title='IBM' location='Pune' />
      </>
}

render(<App />, document.getElementById('root'));