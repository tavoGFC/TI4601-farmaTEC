import React from 'react';
import { Button, Card, Col, Container, Form, FormControl, Modal, Row, Tab, Tabs, Table, Badge } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class OrderEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderProducts: [],
      productsFind: [],
      showAddProduct: false,
      amountProduct: 1,
      orders: [
        { id: '1', number: '123', client: '116290789', state: 'Listo para entregar' },
        { id: '2', number: '125', client: '115987892', state: 'En proceso' }
      ],
      clientId: '',
      typeOrder: '',
      stateOrder: '',
      productNameFind: '',
      pharmacyList: [],
      pharmacyId: ''
    };
    this._handleChangeAmountProduct = this._handleChangeAmountProduct.bind(this);
  }

  componentDidMount() {
    return fetch(`http://localhost:8080/GetAllBranch`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            pharmacyList: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


  _findOrderProducts = () => {
    return (
      <Modal
        show={this.state.showAddProduct}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Agregar productos a la orden
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline>
            <FormControl type="text" placeholder="Buscar producto" className="mr-sm-1" onChange={this._onFindProductsName.bind(this)} />
            <Button variant="outline-dark" size="sm" onClick={this._onFindProducts}>Buscar</Button>
          </Form>
          <div style={{ margin: '5%', height: 550, width: '90%', overflow: 'scroll' }}>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                {this.state.productsFind.slice(0, this.state.productsFind.length / 2).map((item) => (
                  <Card style={{ width: '18rem', marginTop: '3%' }} key={item.Pd_ID}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.Pd_Name} {item.Pd_ID}</Card.Title>
                      <Card.Text>{item.Pd_Description}</Card.Text>
                      <div>Precio <Badge>{item.Pd_Price}</Badge></div>
                      <TextField
                        label="Cantidad"
                        type="number"
                        value={this.state.amountProduct}
                        onChange={this._handleChangeAmountProduct} />
                      <Button variant="primary" onClick={this._onAddOrderProduct.bind(this, item, this.state.amountProduct)}>Agregar este producto</Button>
                    </Card.Body>
                  </Card>
                ))}
              </Grid>
              <Grid item xs={6}>
                {this.state.productsFind.slice(this.state.productsFind.length / 2, this.state.productsFind.length).map((item) => (
                  <Card style={{ width: '18rem', marginTop: '3%' }} key={item.Pd_ID}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.Pd_Name} {item.Pd_ID}</Card.Title>
                      <Card.Text>{item.Pd_Description}</Card.Text>
                      <div>Precio <Badge>{item.Pd_Price}</Badge></div>
                      <TextField
                        label="Cantidad"
                        type="number"
                        value={this.state.amountProduct}
                        onChange={this._handleChangeAmountProduct} />
                      <Button variant="primary" onClick={this._onAddOrderProduct.bind(this, item, this.state.amountProduct)}>Agregar este producto</Button>
                    </Card.Body>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this._onViewAddOrderProduct}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={this._onViewAddOrderProduct}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  _handleChangeAmountProduct(event) {
    this.setState({ amountProduct: event.target.value });
  }

  _handleChangeType(event) {
    this.setState({ typeOrder: event.target.value });
  }

  _handleChangeState(event) {
    this.setState({ stateOrder: event.target.value });
  }

  _handleChangePharmacy(event) {
    this.setState({ pharmacyId: event.target.value })
  }

  _onAddOrderProduct(item, value) {
    item['amount'] = value
    this.setState({
      orderProducts: [...this.state.orderProducts, item]
    });
  }

  _onCreateOrder = () => {
    this.state.orderProducts.map((item) => {
      fetch(`http://localhost:8080/AddOrder?client=${this.state.clientId}&state=${this.state.stateOrder}&type=${this.state.typeOrder}&pharmacy=${this.state.pharmacyId}&product=${item.Pd_ID}&quantity=${item.amount}&price=${item.Pd_Price}`,
        {
          method: 'GET'
        })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson !== '') {
            console.log(responseJson);
          }
        })
        .catch(error => {
          console.error(error);
        });
    });

  }

  _onDeleteProduct(id) {
    this.setState(state => {
      const orderProducts = state.orderProducts.filter(item => item.Pd_ID !== id);
      return {
        orderProducts
      };
    });
  }

  _onFindClient(event) {
    this.setState({ clientId: event.target.value })
  }

  _onFindProductsName(event) {
    this.setState({ productNameFind: event.target.value })
  }

  _onFindProducts = () => {
    return fetch(`http://localhost:8080/GetProductName?product=${this.state.productNameFind}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            productsFind: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  _onViewAddOrderProduct = () => {
    this.setState({
      showAddProduct: !this.state.showAddProduct,
      productsFind: [],
      amountProduct: 1
    })
  }


  render() {
    return (
      <div style={{ marginTop: '3%' }}>
        <Tabs defaultActiveKey="order" id="tab-options-employee">
          <Tab eventKey="order" title="Pedido">
            <Container>
              <Row style={{ marginTop: '15%' }}>
                <Col></Col>
                <Col xs={11}>
                  <div style={{ marginBottom: '5%', fontSize: 20 }}>Registrar Pedido</div>
                  <Form>
                    <Form.Group controlId="ControlInputClient">
                      <Form.Label>Cedula Cliente:</Form.Label>
                      <Form.Control type="number" placeholder="0 0000 0000" onChange={this._onFindClient.bind(this)} />
                    </Form.Group>
                    <Form.Group controlId="ControlSelectState">
                      <Form.Label>Estado de pedido:</Form.Label>
                      <Form.Control as="select" onChange={this._handleChangeState.bind(this)}>
                        <option value={'Listo'}>Listo para entregar</option>
                        <option value={'EnProceso'}>En proceso</option>
                        <option value={'Entregado'}>Entregado</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ControlSelectType">
                      <Form.Label>Tipo de pedido:</Form.Label>
                      <Form.Control as="select" onChange={this._handleChangeType.bind(this)}>
                        <option>Especial</option>
                        <option>Regular</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ControlSelectPharmacy">
                      <Form.Label>Surcusal:</Form.Label>
                      <Form.Control as="select" onChange={this._handleChangePharmacy.bind(this)}>
                        {this.state.pharmacyList.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  <Fab variant="extended" aria-label="add" onClick={this._onViewAddOrderProduct}>
                    <AddIcon />
                    Agregar productos
                  </Fab>
                  <div style={{ margin: '5%' }}>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Medicamento</th>
                          <th>Cantidad</th>
                          <th>Precio Unitario</th>
                          <th>Precio Total</th>
                          <th>Eliminar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.orderProducts.map((item) => (
                          <tr key={item.Pd_ID}>
                            <td>{item.Pd_ID}</td>
                            <td>{item.Pd_Name}</td>
                            <td>{item.amount}</td>
                            <td> $ {item.Pd_Price}</td>
                            <td>{(item.amount) * (item.Pd_Price)}</td>
                            <td>
                              <IconButton aria-label="delete" style={{ color: 'red' }} onClick={this._onDeleteProduct.bind(this, item.Pd_ID)}>
                                <DeleteIcon />
                              </IconButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div>{this._findOrderProducts()}</div>
                  <div style={{ marginLeft: '30%', marginRight: '30%' }}>
                    <Button variant="primary" onClick={this._onCreateOrder}>
                      Generar Pedido
                </Button>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="orderEdit" title="Actualizar Pedido">
            <div style={{ marginTop: '3%' }}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Numero de Pedido</th>
                    <th>Cliente</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.number}</td>
                      <td>{order.client}</td>
                      <td>
                        <Form.Group controlId="ControlSelectState">
                          <Form.Label>{order.state}</Form.Label>
                          <Form.Control as="select">
                            <option>Listo para entregar</option>
                            <option>En proceso</option>
                            <option>Entregado</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div class="row" style={{ margin: '4%' }}>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                  <div style={{ marginLeft: '30%', marginRight: '30%' }}>
                    <Button variant="warning" >
                      Cancelar
                </Button>
                  </div></div>
                <div class="col-sm-4">
                  <div style={{ marginLeft: '30%', marginRight: '30%' }}>
                    <Button variant="success">
                      Guardar
                </Button>
                  </div></div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default OrderEmployee;
