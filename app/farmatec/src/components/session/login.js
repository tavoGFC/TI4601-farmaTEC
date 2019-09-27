import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

import Menu from '../menu';
import SignUp from './signup';


const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isCreateAccount: false,
      email: '',
      password: ''
    };

  }


  _onSearchUser = event => {
    this.setState({
      email: event.target.text
    });
  };

  _onSearchPasswordUser = event => {
    this.setState({
      password: event.target.text
    });
  };


  _onSignUpPressed = () => {
    this.setState({ isCreateAccount: true })
  };

  _submitData = async () => {
    //validar data
    /// si es correcta cambiar ventana ventana principal
    /// si es inorrecta mandar alerta de error
    const config1 = {
      server: 'GUS-LV',
      database: 'farmatec',
      user: 'user_admin',
      password: 'asmodeoPASS16*',
      port: 1433
    };

    const config = {
      server: 'GUS-LV',
      authentication: {
        type: 'default',
        options: {
          userName: 'user_admin', // update me
          password: 'asmodeoPASS16*' // update me
        }
      },
      options: {
        database: 'farmatec'
      }
    }
    const connection = new Connection(config);

    // Attempt to connect and execute queries if connection goes through
    connection.on('connect', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected');
      }
    });


    //this.setState({ isLoading: true })
  };



  render() {
    if (this.state.isLoading) {
      return (
        <Menu />
      );
    }
    else if (this.state.isCreateAccount) {
      return (
        <SignUp />
      )
    }
    else {
      return (
        <Container>
          <h1 align='center' style={{ marginTop: '4%' }}>FarmaTEC</h1>
          <Row className='justify-content-md-center' style={{ marginTop: '3%' }}>
            <Col md='auto'>
              <Form>
                <Form.Group controlId='formBasicUser' style={{ marginTop: '3%' }}>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type='string'
                    placeholder='e.g. farmatec.19'
                    onChange={this._onSearchUser}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPassword' style={{ marginTop: '3%' }}>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='********'
                    onChange={this._onSearchPasswordUser}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className='justify-content-md-center' style={{ marginTop: '3%' }}>
            <div >
              <Button
                variant='primary'
                type='submit'
                size='lg'
                onClick={this._submitData}
              >
                Aceptar
            </Button>
            </div>

            <div>
              <Col md='auto'>
                <Button
                  variant='primary'
                  type='submit'
                  size='lg'
                  onClick={this._onSignUpPressed}
                >
                  Crear Cuenta
              </Button>
              </Col>
            </div>
          </Row>
        </Container>
      );
    }
  }
}
export default LogIn;
