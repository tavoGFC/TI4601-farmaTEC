import React from 'react';
import { Table } from 'react-bootstrap';


class OrderClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };

  }

  componentDidMount() {
    this.setState({
      orders: [
        { id: '1', number: '123', detail: 'curitas, alcohol, pastillas', state: 'Listo para entregar' },
        { id: '2', number: '125', detail: '2 aspirinaTEC', state: 'En proceso' }
      ]
    });
  }

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
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.number}</td>
                  <td>{order.detail}</td>
                  <td>{order.state}</td>
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
