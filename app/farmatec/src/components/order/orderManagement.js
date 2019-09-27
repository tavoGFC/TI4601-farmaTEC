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

  componentDidMount() {
    //TODO
  };

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
    this.setState({
      bestClients: [
        { id: '1', number: '123456789', name: 'Usuario Test', ordersAmount: '2', totalAmount: '$130'},
        { id: '2', number: '116290789', name: 'Alonso Carrera', ordersAmount: '12', totalAmount: '$79'},
        { id: '2', number: '116290789', name: 'Gustavo Fallas', ordersAmount: '12', totalAmount: '$36' }
      ]
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
                <th>Pedidos Realizados</th>
                <th>Monto Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bestClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.number}</td>
                  <td>{client.ordersAmount}</td>
                  <td>{client.totalAmount}</td>
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
