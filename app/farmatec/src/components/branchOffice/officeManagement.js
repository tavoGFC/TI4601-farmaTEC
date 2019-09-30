import React from 'react';
import { Button, Form, Tab, Tabs, Table } from 'react-bootstrap';
import Search from '@material-ui/icons/SearchOutlined';


class OfficeManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountByBranchOffice: [],
      amountByType: [],
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

  _handleChangeStartDate(event) {
    this.setState({ startDate: event.target.value });
  }

  _handleChangeEndDate(event) {
    this.setState({ endDate: event.target.value });
  }

  _onSearchType = () => {
    return fetch(`http://localhost:8080/GetBranchTypeRaisedMoney?in=${this.state.startDate}&out=${this.state.endDate}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            amountByType: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  _onSearchAmount = () => {
    return fetch(`http://localhost:8080/GetBranchRaisedMoney?in=${this.state.startDate}&out=${this.state.endDate}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {

        if (responseJson !== '') {
          this.setState({
            amountByBranchOffice: responseJson
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
          <Tab eventKey="amount" title="Monto Total">
            <div style={{ marginTop: '3%' }}>
              {this._selectDate(this._onSearchAmount)}
              <div style={{ margin: '5%' }}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Sucursal</th>
                      <th>Monto Recaudado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.amountByBranchOffice.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td> $ {item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Tab>
          <Tab eventKey="amountType" title="Monto Total por Tipo">
            <div style={{ marginTop: '3%' }}>
              {this._selectDate(this._onSearchType)}
              <div style={{ margin: '5%' }}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Sucursal</th>
                      <th>Monto Recaudado</th>
                      <th>Tipo de Pedido Realizado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.amountByType.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td> $ {item.amount}</td>
                        <td>{item.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default OfficeManagement;
