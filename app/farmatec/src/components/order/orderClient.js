import React from 'react';
import { Table } from 'react-bootstrap';


class OrderClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.id,
      orders: []
    };

  }

  componentDidMount() {
    return fetch(`http://localhost:8080/GetOrdersClient?client=${this.state.userId}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== '') {
          console.log(responseJson);
          this.setState({
            orders: responseJson
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };


  render() {
    return (
      <div style={{ marginTop: '3%' }}>
        <div style={{ margin: '5%' }}>
          <Table responsive>
            <thead>
              <tr>
                <th>Numero de Pedido</th>
                <th>Detalle</th>
                <th>Estado</th>
                <th>Tipo</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((order) => (
                <tr key={order.Or_ID}>
                  <td>{order.Or_ID}</td>
                  <td>Productos: {order.Pd_Quantity}</td>
                  <td>{order.Or_State}</td>
                  <td>{order.Or_Type}</td>
                  <td> $ {order.Price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}


export default OrderClient;
