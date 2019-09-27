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
      ]
    };
    this._handleChangeAmountProduct = this._handleChangeAmountProduct.bind(this);

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
            <FormControl type="text" placeholder="Buscar producto" className="mr-sm-1" />
            <Button variant="outline-dark" size="sm" onClick={this._onFindProducts}>Buscar</Button>
          </Form>
          <div style={{ margin: '5%', height: 550, width: '90%', overflow: 'scroll' }}>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                {this.state.productsFind.slice(0, this.state.productsFind.length / 2).map((item) => (
                  <Card style={{ width: '18rem', marginTop: '3%' }} key={item.id}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.name} {item.id}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div>Precio <Badge>{item.price}</Badge></div>
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
                  <Card style={{ width: '18rem', marginTop: '3%' }} key={item.id}>
                    <Card.Img variant="top" src={item.photo} />
                    <Card.Body>
                      <Card.Title>{item.name} {item.id}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div>Precio <Badge>{item.price}</Badge></div>
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

  _onAddOrderProduct(item, value) {
    item['amount'] = value
    this.setState({
      orderProducts: [...this.state.orderProducts, item]
    });
  }

  _onDeleteProduct(id) {
    this.setState(state => {
      const orderProducts = state.orderProducts.filter(item => item.id !== id);
      return {
        orderProducts
      };
    });
  }


  _onFindProducts = () => {
    this.setState({
      productsFind: [
        { id: '1', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
        { id: '2', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
        { id: '3', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
        { id: '4', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
        /*
          { id: '5', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
          { id: '6', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
          { id: '7', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
          { id: '8', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
          { id: '9', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
          { id: '10', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
          { id: '11', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
          { id: '12', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
          { id: '13', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' },
          { id: '14', name: 'omeprazolTEC', description: 'tomar antes del desayuno, todos los dias', price: 85, photo: 'https://static.ideal.es/www/multimedia/201907/20/media/cortadas/omeprazol-kLBF-U80803241370w4G-624x385@Ideal.jpg' },
          { id: '15', name: 'aspirinaTEC', description: 'dolores de cabeza, tomar 2 veces al dia', price: 10, photo: 'https://www.farmaciasoler.com/img/uploads/aspirina-plus-500mg-50-mg-20comp--0.jpg' }
        */
      ]
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
                      <Form.Control type="number" placeholder="0 0000 0000" />
                    </Form.Group>
                    <Form.Group controlId="ControlSelectState">
                      <Form.Label>Estado de pedido:</Form.Label>
                      <Form.Control as="select">
                        <option>Listo para entregar</option>
                        <option>En proceso</option>
                        <option>Entregado</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ControlSelectType">
                      <Form.Label>Tipo de pedido:</Form.Label>
                      <Form.Control as="select">
                        <option>Especial</option>
                        <option>Regular</option>
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
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.price}</td>
                            <td>{(item.amount) * (item.price)}</td>
                            <td>
                              <IconButton aria-label="delete" style={{ color: 'red' }} onClick={this._onDeleteProduct.bind(this, item.id)}>
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
                    <Button variant="primary">
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
