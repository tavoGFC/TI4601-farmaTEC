import React from 'react';
import { Button, Card, Col, Container, Form, FormControl, Modal, Row, Tab, Tabs, Table, Badge } from 'react-bootstrap';
import Search from '@material-ui/icons/SearchOutlined';


class OfficeManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branchOffice: '',
      amountOffice: '',
      startDate: '',
      endDate: ''
    };
  }

  componentDidMount(){
    //TODO
    this.setState({ 
      branchOffice: 'San Jose',
      amountOffice: '$ 120'
    });
  }
 
  render() {
    return (
      <div style={{ marginTop: '3%' }}>
        <Tabs defaultActiveKey="amount" id="tab-options-management">
          <Tab eventKey="amount" title="Monto Total Recaudado">
            <div style={{ marginTop: '3%' }}>
              El monto recaudado por la sucursal 
              <a style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold'}}>{this.state.branchOffice}</a>
              hasta la fecha es de: <a style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold'}}>{this.state.amountOffice}</a>
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
