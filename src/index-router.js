import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Link, Switch, Route, useParams, useRouteMatch, useHistory } from 'react-router-dom';

//TODO: Write  this in a separate file
export const Home = () => {
      return <div>
            <h1>IBM Home</h1>
      </div>
};
//TODO: Write  this in a separate file

export const ContactUs = () => {
      return <div>
            <h1>ContactUs</h1>
      </div>
};
//TODO: Write  this in a separate file

export const Dashboard = () => {
      return <div>
            <h1>IBM DashBoard</h1>
      </div>
};

export const Topics = () => {
      let { path, url } = useRouteMatch();

      return <>
            <h1>Topics</h1>
            <ul>
                  <li>
                        <Link to={`${url}/react`}>
                              React Fiber
                      </Link>
                  </li>
                  <li>
                        <Link to={`${url}/angular`}>
                              Angular 8
                      </Link>
                  </li>
                  <li>
                        <Link to={`${url}/vue`}>
                              Vue
                      </Link>
                  </li>
            </ul>
            <Route path={`${path}/:topicId`} component={Topic} />
      </>
}

/* const Topic = ({ match }) => (
      <div>
            <h3>{match.params.topicId}</h3>
      </div>
) */
const Topic = () => {
      let { topicId } = useParams();
      let history = useHistory();

      function handleClick() {
            history.push("/");
      }
      return <div>
            <h3>{topicId}</h3>
            <button type="button" onClick={handleClick}>
                  Go home
            </button>
      </div>
}

//Shell Component
const App = () => {
      return <BrowserRouter>
            <div>
                  <ul>
                        <li>
                              <Link to="/">Home</Link>
                        </li>
                        <li>
                              <Link to="/about">About</Link>
                        </li>
                        <li>
                              <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                              <Link to="/topics">Topics</Link>
                        </li>
                  </ul>
            </div>
            <hr />
            <Switch>
                  <Route exact path="/">
                        <Home />
                  </Route>
                  <Route path="/about">
                        <ContactUs />
                  </Route>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/topics" component={Topics} />
            </Switch>
      </BrowserRouter >;
}
render(<App />, document.getElementById('root'));