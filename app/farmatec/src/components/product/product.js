import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div style={{ margin: '6%' }}>
        <h4 style={{ margin: '2%' }}> En mantenimiento </h4>
        <div style={{ alignContent: 'center' }}>
          <img src="https://image.flaticon.com/icons/png/512/1891/1891247.png" alt="en proceso"></img>
        </div>
      </div>
    );
  }
}

export default Product;
