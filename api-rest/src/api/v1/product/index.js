import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';

function ProductRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Product',
      handler: function(request, h) {
        return '<h1>Product Test Successful!<h1>';
      }
    }
  ]);
}

export default ProductRoutes;
