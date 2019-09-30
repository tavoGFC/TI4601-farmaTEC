import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import Search from '@material-ui/icons/SearchOutlined';

class OrderManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestClients: [],
      startDate: '',
      endDate: ''
    };

  }

  _selectDate = () => {
    return (
      <div>
        <h6 style={{ marginTop: '5%' }}>Seleccionar fechas para consultar mejores clientes</h6>
        <div className="row">
          <div className="col-md-auto">
            <Form.Group controlId="ControlInputStartDate">
              <Form.Label>Desde:</Form.Label>
              <Form.Control type="date" placeholder="dd/mm/yyyy" onChange={this._handleChangeStartDate.bind(this)} />
            </Form.Group>
          </div>
          <div className="col-md-auto">
            <Form.Group controlId="ControlInputEndDate">
              <Form.Label>Hasta:</Form.Label>
              <Form.Control type="date" placeholder="dd/mm/yyyy" onChange={this._handleChangeEndDate.bind(this)} />
            </Form.Group>
          </div>
          <div className="col-md-auto">
            <Button variant="outline-primary" onClick={this._onSearchBestClients}> Buscar <Search /> </Button>
          </div>
        </div>
      </div>
    );
  }

  _onSearchBestClients = () => {
    return fetch(`http://localhost:8080/GetTopThreeClients?in=${this.state.startDate}&out=${this.state.endDate}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          this.setState({
            bestClients: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


  _handleChangeStartDate(event) {
    this.setState({ startDate: event.target.value });
  }

  _handleChangeEndDate(event) {
    this.setState({ endDate: event.target.value });
  }

  render() {
    return (
      <div style={{ marginTop: '3%' }}>
        {this._selectDate()}
        <h6 style={{ marginTop: '5%' }}>Resultados</h6>
        <div className="row" style={{ marginTop: '3%' }}>
          <Table responsive>
            <thead>
              <tr>
                <th>Nombre Cliente</th>
                <th>Cedula Cliente</th>
                <th>Monto Total en Pedidos</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bestClients.map((client) => (
                <tr key={client.Cl_ID}>
                  <td>{client.Cl_First_Name} {client.Cl_Last_Name_1} {client.Cl_Last_Name_2}</td>
                  <td>{client.Cl_ID}</td>
                  <td>{client.Price_Sum}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div >
    );
  }
}


export default OrderManagement;
