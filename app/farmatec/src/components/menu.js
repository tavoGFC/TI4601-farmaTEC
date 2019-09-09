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
          <div className='container center'>
            <nav class='menu'>
              <h1 class='menu__logo'>FarmaTEC</h1>
              <ul className='menu__list'>
                <li className='menu__list-item'>
                  <NavLink to='/' exact activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li className='menu__list-item'>
                  <NavLink to='/Heredia' exact activeClassName='active'>
                    Heredia (Centrales)
                  </NavLink>
                </li>
                <li className='menu__list-item'>
                  <NavLink to='/SanJose' exact activeClassName='active'>
                    Cartago (Auxiliar)
                  </NavLink>
                </li>
                <li className='menu__list-item'>
                  <NavLink to='/Cartago' exact activeClassName='active'>
                    San Jose (Auxiliar)
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
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
