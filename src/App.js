import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Home from './components/Home';
import Color from './components/Color';
import PageNotFound from './components/PageNotFound';

const About = React.lazy(() => import('./components/About'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="activeNavLink" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="activeNavLink">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route
              path="/color"
              render={() => {
                return <Color color="green" />;
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
