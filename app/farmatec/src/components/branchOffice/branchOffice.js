import React from 'react';
import { Card } from 'react-bootstrap';
import OfficeManagement from './officeManagement';
import OfficeAdmin from './officeAdministrator';

class BranchOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: props.userType,
      userId: props.userId,
      branchesOffice: []
    };

  }

  componentDidMount() {
    return fetch('http://localhost:8080/GetAllBranch',
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          this.setState({
            branchesOffice: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
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
                <p style={{ marginLeft: '1%', marginRight: '1%' }}>Cuidad: {office.city}</p>
                <p style={{ marginLeft: '1%', marginRight: '1%' }}>Tel: {office.phone}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Desde: {office.open_hour} hasta: {office.close_hour}</Card.Footer>
          </Card>
        ))}
      </div>
    );
  }

  render() {
    if (this.state.userType === '0') {
      return (
        <div style={{ marginTop: '5%' }}> {this._viewBranchOffice()}
        </div>
      );
    }
    else if (this.state.userType === 2) {
      return (
        <div> <OfficeAdmin userId={this.state.userId} /> </div>
      );
    }
    else if (this.state.userType === 1) {
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
