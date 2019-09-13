import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Login from './components/login';
import MedLogo from './images/logo.png';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById('root'));
