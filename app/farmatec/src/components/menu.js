import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import HomeComponent from './home';
import HerediaComponent from './heredia';
import SanJoseComponent from './sanjose';
import CartagoComponent from './cartago';

import './../styles/menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <header id='header'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/Heredia' exact activeClassName='active'>
                  Heredia (Centrales)
                </NavLink>
              </li>
              <li>
                <NavLink to='/SanJose' exact activeClassName='active'>
                  Cartago (Auxiliar)
                </NavLink>
              </li>
              <li>
                <NavLink to='/Cartago' exact activeClassName='active'>
                  San Jose (Auxiliar)
                </NavLink>
              </li>
            </ul>
          </header>
          <main>
            <Switch>
              <Route path='/' exact component={HomeComponent} />
              <Route path='/Heredia' exact component={HerediaComponent} />
              <Route path='/SanJose' exact component={SanJoseComponent} />
              <Route path='/Cartago' exact component={CartagoComponent} />
              <Redirect to='/' />
              Main Content Here!
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default Menu;
