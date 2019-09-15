import React from 'react';
import { Button, Card, Col, Container, Form, FormControl, Modal, Row, Tab, Tabs, Table, Badge } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import Search from '@material-ui/icons/SearchOutlined';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class OrderAdministrator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      clients: [],
      clientsConsulta2: [],
      orderType: '',
      orderMonth: '',
      resultConsult3: ''
    };

  }

  componentDidMount() {
    //TODO
  };

  _selectDate = (buttonAction) => {
    return (
      <div>
        <h6 style={{ marginTop: '5%' }}>Seleccionar fechas</h6>
        <div className="row">
          <div className="col-md-auto">
            <Form.Group controlId="ControlInputStartDate">
              <Form.Label>Desde:</Form.Label>
              <Form.Control type="date" placeholder="dd/mm/yy" />
            </Form.Group>
          </div>
          <div className="col-md-auto">
            <Form.Group controlId="ControlInputEndDate">
              <Form.Label>Hasta:</Form.Label>
              <Form.Control type="date" placeholder="dd/mm/yy" />
            </Form.Group>
          </div>
          <div className="col-md-auto">
            <Button variant="outline-primary" onClick={buttonAction}> Buscar <Search /> </Button>
          </div>
        </div>
      </div>
    );
  }

  _onSearchConsult1 = () => {
    console.log("buscar consulta 1");
    this.setState({
      orders: [
        { id: '1', number: '123', detail: 'curitas, alcohol, pastillas', clientId: '116290789', date: "15-09-2019" },
        { id: '2', number: '125', detail: '2 aspirinaTEC', clientId: '123456789', date: "22-09-2019" },
        { id: '3', number: '153', detail: 'pastillas', clientId: '123456789', date: "02-09-2019" },
        { id: '1', number: '123', detail: 'curitas, alcohol, pastillas', clientId: '116290789', date: "15-09-2019" },
        { id: '2', number: '125', detail: '2 aspirinaTEC', clientId: '123456789', date: "22-09-2019" },
        { id: '3', number: '153', detail: 'pastillas', clientId: '123456789', date: "02-09-2019" },
        { id: '1', number: '123', detail: 'curitas, alcohol, pastillas', clientId: '116290789', date: "15-09-2019" },
        { id: '2', number: '125', detail: '2 aspirinaTEC', clientId: '123456789', date: "22-09-2019" },
        { id: '3', number: '153', detail: 'pastillas', clientId: '123456789', date: "02-09-2019" },
        { id: '1', number: '123', detail: 'curitas, alcohol, pastillas', clientId: '116290789', date: "15-09-2019" },
        { id: '2', number: '125', detail: '2 aspirinaTEC', clientId: '123456789', date: "22-09-2019" },
        { id: '3', number: '153', detail: 'pastillas', clientId: '123456789', date: "02-09-2019" }
      ],
      clients: [
        { id: '1', number: '123456789', name: 'Usuario Test', ordersAmount: '2' },
        { id: '2', number: '116290789', name: 'Alonso Carrera', ordersAmount: '12' }
      ]
    });
  }

  _onSearchConsult2 = () => {
    console.log("buscar consulta 2");
    this.setState({
      clientsConsulta2: [
        { id: '1', clientId: '123456789', name: 'Usuario Test', orderAmount: '2', orderAverage: '$14' },
        { id: '2', clientId: '116290789', name: 'Alonso Carrera', orderAmount: '12', orderAverage: '$5' }
      ]
    });
  }

  _onSearchConsult3 = () => {
    this.setState({ resultConsult3: '$ ' + Math.floor((Math.random() * 100) + 1) });
  }

  _handleChangeOrderType(event) {
    this.setState({ orderType: event.target.value });
  }

  _handleChangeOrderMonth(event) {
    this.setState({ orderMonth: event.target.value });
  }

  render() {
    return (
      <div style={{ marginTop: '3%' }}>
        <Tabs defaultActiveKey="numb1" id="tab-options-admin">
          <Tab eventKey="numb1" title="Consulta Pedidos Cliente">
            {this._selectDate(this._onSearchConsult1)}
            <h6 style={{ marginTop: '5%' }}>Resultados</h6>
            <div className="row">
              <div className="col-md-auto">
                <div style={{ marginTop: '3%' }}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>Cedula Cliente</th>
                        <th>Pedidos Realizados</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.clients.map((client) => (
                        <tr key={client.id}>
                          <td>{client.name}</td>
                          <td>{client.number}</td>
                          <td>{client.ordersAmount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-md-auto">
                <div style={{ marginTop: '3%' }}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Numero de Pedido</th>
                        <th>Cedula Cliente</th>
                        <th>Fecha Pedido</th>
                        <th>Detalle Pedido</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.orders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.number}</td>
                          <td>{order.clientId}</td>
                          <td>{order.date}</td>
                          <td>{order.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </Tab>
          <Tab eventKey="num2" title="Consulta Pedido Pago Prodedio">
            {this._selectDate(this._onSearchConsult2)}
            <div style={{ marginTop: '3%' }}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Cedula Cliente</th>
                    <th>Cantidad Pedidos</th>
                    <th>Monto Promedio Pedido</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.clientsConsulta2.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.clientId}</td>
                      <td>{item.orderAmount}</td>
                      <td>{item.orderAverage}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Tab>
          <Tab eventKey="num3" title="Consulta Tipo de Pedido">
            <h6 style={{ marginTop: '5%' }}>Seleccionar parametros</h6>
            <div className="row">
              <div className="col-md-auto">
                <Form.Group controlId="ControlInputStartDate">
                  <Form.Label>Mes:</Form.Label>
                  <Form.Control as="select" placeholder="tipo" onChange={this._handleChangeOrderMonth.bind(this)}>
                    <option>Enero</option>
                    <option>Febrero</option>
                    <option>Marzo</option>
                    <option>Abril</option>
                    <option>Mayo</option>
                    <option>Junio</option>
                    <option>Julio</option>
                    <option>Agosto</option>
                    <option>Septiembre</option>
                    <option>Octubre</option>
                    <option>Noviembre</option>
                    <option>Diciembre</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-auto">
                <Form.Group controlId="ControlInputEndDate">
                  <Form.Label>Tipo:</Form.Label>
                  <Form.Control as="select" placeholder="tipo" onChange={this._handleChangeOrderType.bind(this)}>
                    <option>Especial</option>
                    <option>Regular</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-auto">
                <Button variant="outline-primary" onClick={this._onSearchConsult3}> Buscar <Search /> </Button>
              </div>
            </div>
            <div className="row" style={{ margin: '4%' }}>
              Total de Monto en Pedidos del Tipo 
              <a style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold'}}>{this.state.orderType}</a>
              para el mes <a style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold'}}>{this.state.orderMonth}</a> 
              es: <a style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold'}}>{this.state.resultConsult3}</a>
            </div>
          </Tab>
        </Tabs>
      </div >
    );
  }
}


export default OrderAdministrator;
