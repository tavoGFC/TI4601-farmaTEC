import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from './signup';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
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
    return (
      <Switch>
        <Route path='/crearcuenta' exact component={SignUp} />
      </Switch>
    );
  };

  _submitData = () => {
    //validar data
    /// si es correcta cambiar ventana ventana principal
    /// si es inorrecta mandar alerta de error
    console.log('Click!');
  };

  render() {
    return (
      <Container>
        <h1 align='center'>FarmaTEC</h1>
        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Form>
              <Form.Group controlId='formBasicUser'>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type='string'
                  placeholder='e.g. farmatec.19'
                  onChange={this._onSearchUser}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
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
        <Row className='justify-content-md-center'>
          <div>
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
export default LogIn;
