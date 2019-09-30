import React from 'react';
import OrderEmployee from './orderEmployee';
import OrderClient from './orderClient';
import OrderAdmin from './orderAdministrator';
import OrderManagement from './orderManagement';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: props.userType,
      userId: props.userId
    };

  }

  render() {
    if (this.state.userType === 4) {
      return (
        <div> <OrderClient id={this.state.userId} />
        </div>
      );
    }
    else if (this.state.userType === 2) {
      return (
        <div> <OrderAdmin /> </div>
      );
    }
    else if (this.state.userType === 1) {
      return (
        <div> <OrderManagement /> </div>
      );
    }
    else {
      return (
        <div> <OrderEmployee /> </div>
      );
    }
  }
}
 

export default Order;
