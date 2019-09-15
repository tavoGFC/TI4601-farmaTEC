import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';

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
