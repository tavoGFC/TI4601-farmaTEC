import React from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import MedLogo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <img src={MedLogo} />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs lg="2"></Col>
        </Row>

      </Container>
    );
  }
}

export default Login;
