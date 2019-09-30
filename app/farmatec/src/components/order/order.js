import React from 'react';
import { Form } from 'react-bootstrap';
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

  _handleChangeUserType(event) {
    console.log(event.target.value);
    this.setState({ userType: event.target.value });
    console.log(this.state.userType);
  }

  _changeUserType = () => {
    return (
      < div className="col-7" >
        <Form.Group controlId="ControlSelectType">
          <Form.Label>UserType:</Form.Label>
          <Form.Control as="select" onChange={this._handleChangeUserType.bind(this)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Form.Group>
      </div >
    );
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
