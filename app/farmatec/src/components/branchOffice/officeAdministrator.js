import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';


class OfficeManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officeData: [],
      adminId: props.userId
    };
  }

  componentDidMount() {
    return fetch(`http://localhost:8080/GetRaisedMoney?admin=${this.state.adminId}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            officeData: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: '3%' }}>
        <Tabs defaultActiveKey="amount" id="tab-options-management">
          <Tab eventKey="amount" title="Monto Total Recaudado">
            <div style={{ marginTop: '3%' }}>
              El monto recaudado por la sucursal
              <p key="0" style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold' }}>{this.state.officeData.name}</p>
              ubicada en la ciudad: <p key="1" style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold' }}>{this.state.officeData.city}</p>
              hasta la fecha es de: $ <p key="2" style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold' }}>{this.state.officeData.amount}</p>
            </div>
          </Tab>
          <Tab eventKey="editInfo" title="Editar Informacion">
            <div style={{ marginTop: '3%' }}>
              Mostrar la info de la sucursal y acceso para editar
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default OfficeManagement;
