import React from 'react';

import LogInComponent from './login';
//import SignUpComponent from './signup';

//<LogInComponent />
//<SignUpComponent />

import './../styles/menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <LogInComponent />
      </div>
    );
  }
}

export default Menu;
