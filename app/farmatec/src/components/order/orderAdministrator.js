import React from 'react';
import { Button, Form, Tab, Tabs, Table } from 'react-bootstrap';
import Search from '@material-ui/icons/SearchOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';

class OrderAdministrator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      clients: [],
      resultConsult2: [],
      orderType: '',
      orderMonth: '',
      orderMonthName: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      resultConsult3: '',
      startDate: '',
      endDate: ''
    };
  }

  _selectDate = (buttonAction) => {
    return (
      <div>
        <h6 style={{ marginTop: '5%' }}>Seleccionar fechas</h6>
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
            <Button variant="outline-primary" onClick={buttonAction}> Buscar <Search /> </Button>
          </div>
        </div>
      </div>
    );
  }

  _onSearchConsult1 = async () => {
    return fetch(`http://localhost:8080/GetClientOrders?in=${this.state.startDate}&out=${this.state.endDate}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            orders: responseJson.map((item) => { return item["order"] }),
            clients: responseJson.map((item) => { return item["client"] })
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  _onSearchConsult2 = async () => {
    return fetch(`http://localhost:8080/GetAveragePaymentClient?in=${this.state.startDate}&out=${this.state.endDate}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            resultConsult2: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  _onSearchConsult3 = () => {
    return fetch(`http://localhost:8080/GetTypeOrderMonth?type=${this.state.orderType}&month=${this.state.orderMonth}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            resultConsult3: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  _handleChangeOrderType(event) {
    this.setState({ orderType: event.target.value });
  }

  _handleChangeOrderMonth(event) {
    this.setState({ orderMonth: event.target.value });
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
        <Tabs defaultActiveKey="numb1" id="tab-options-admin">
          <Tab eventKey="numb1" title="Consulta Pedidos Cliente">
            {this._selectDate(this._onSearchConsult1)}
            <h6 style={{ marginTop: '5%' }}>Resultados</h6>
            <div className="row">
              <div className="col-md-auto">
                <div style={{ marginTop: '3%' }}>
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>Cedula Cliente</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.clients.map((client) => (
                        <tr key={client.id}>
                          <td>{client.name}</td>
                          <td>{client.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-md-auto">
                <div style={{ marginTop: '3%' }}>
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>Numero de Pedido</th>
                        <th>Cedula Cliente</th>
                        <th>Fecha Pedido</th>
                        <th>Detalle Pedido</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.orders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.client}</td>
                          <td>{order.date}</td>
                          <td>{order.product}</td>
                          <td> $ {order.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </Tab>
          <Tab eventKey="num2" title="Consulta Pedido Pago Promedio">
            {this._selectDate(this._onSearchConsult2)}
            <div style={{ marginTop: '3%' }}>
              <Table responsive >
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Monto Promedio Pedido</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.resultConsult2.map((item) => (
                    <tr key={item.id}>
                      <td>{item.Cl_First_Name} {item.Cl_Last_Name_1} {item.Cl_Last_Name_2}</td>
                      <td>{item.Average_Payment}</td>
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
                    <option value={'01'}>Enero</option>
                    <option value={'02'}>Febrero</option>
                    <option value={'03'}>Marzo</option>
                    <option value={'04'}>Abril</option>
                    <option value={'05'}>Mayo</option>
                    <option value={'06'}>Junio</option>
                    <option value={'07'}>Julio</option>
                    <option value={'08'}>Agosto</option>
                    <option value={'09'}>Septiembre</option>
                    <option value={'10'}>Octubre</option>
                    <option value={'11'}>Noviembre</option>
                    <option value={'12'}>Diciembre</option>
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
              <p style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold' }}>{this.state.orderType}</p>
              para el mes <p style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold' }}>{this.state.orderMonthName[this.state.orderMonth-1]}</p>
              es: <p style={{ marginLeft: '1%', marginRight: '1%', fontWeight: 'bold' }}>{this.state.resultConsult3}</p>
            </div>
          </Tab>
        </Tabs>
      </div >
    );
  }
}


export default OrderAdministrator;
