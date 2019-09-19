import React from 'react';
import {
  Form,
  Button,
  ButtonToolbar,
  Container,
  Col,
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      password: ''
    };
  }

  _onSearchEmailUser = event => {
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
    // cambiar ventana a crear cuenta
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
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='ejemplo@correo.com'
                  onChange={this._onSearchEmailUser}
                />
                <Form.Text className='text-muted'>
                  Su información no va a ser compartida con nadie.
                </Form.Text>
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
