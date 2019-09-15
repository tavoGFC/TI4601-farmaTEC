import React from 'react';
import { Form } from 'react-bootstrap';

import OfficeManagement from './officeManagement';


class BranchOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '2'
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
    if (this.state.userType === '0') {
      return (
        <div> Cliente 
        {
            /* ========== Parte para probar las vistas =========== */
            //this._changeUserType()
            //----------BORRAR---------------
          }
        </div>
      );
    }
    else if (this.state.userType === '1') {
      return (
        <div> Admin </div>
      );
    }
    else if (this.state.userType === '2') {
      return (
        <div> <OfficeManagement /> </div>
      );
    }
    else {
      return (
        <div> Empleado </div>
      );
    }
  }
}

export default BranchOffice;
