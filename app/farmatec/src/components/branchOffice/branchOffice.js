import React from 'react';
import { Form, Card } from 'react-bootstrap';

import OfficeManagement from './officeManagement';
import OfficeAdmin from './officeAdministrator';

class BranchOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '2',
      branchesOffice: []
    };

  }

  /* ---------------------- Inicio    Borrar -------------------- */
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
  /* ----------------------  Fin   Borrar -------------------- */


  componentDidMount() {
    this.setState({
      branchesOffice: [
        { id: 1, name: 'Heredia', info: 'Ubicados en Centro', schedule: 'Lunes a Viernes 08:00 - 19:00', photo: 'http://www.farmaciascondefa.com/images/farmacia.png' },
        { id: 2, name: 'San Jose', info: 'Parque Central 300 metros norte', schedule: 'Lunes a Viernes 08:00 - 22:00', photo: 'http://www.farmaciascondefa.com/images/farmacia.png' },
        { id: 3, name: 'Cartago', info: 'Costado norte de la iglesia', schedule: 'Lunes a Viernes 08:00 - 15:00', photo: 'http://www.farmaciascondefa.com/images/farmacia.png' }
      ]
    });
  }

  _viewBranchOffice = () => {
    return (
      <div className="row">
        {this.state.branchesOffice.map((office) => (
          <Card key={office.id} style={{ width: '18rem', margin: '2%' }}>
            <Card.Img variant="top" src={office.photo} />
            <Card.Body>
              <Card.Title>{office.name}</Card.Title>
              <Card.Text>
                {office.info}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{office.schedule}</Card.Footer>
          </Card>
        ))}
      </div>
    );
  }

  render() {
    if (this.state.userType === '0') {
      return (
        <div style={{ marginTop: '5%' }}> {this._viewBranchOffice()} 
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
        <div> <OfficeAdmin /> </div>
      );
    }
    else if (this.state.userType === '2') {
      return (
        <div> <OfficeManagement /> </div>
      );
    }
    else {
      return (
        <div style={{ marginTop: '5%' }}> {this._viewBranchOffice()} </div>
      );
    }
  }
}

export default BranchOffice;
