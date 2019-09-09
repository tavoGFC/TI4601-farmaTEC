import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
//import MedLogo from './images/logo.png';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*         <img src={MedLogo} />
         */}{' '}
        <Menu />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
