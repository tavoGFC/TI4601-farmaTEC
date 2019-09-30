import Db from '../../../models/farmatecSanJose';
import Sequelize from 'sequelize';

function ProductRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Product',
      handler: function (request, h) {
        return '<h1>Product Test Successful!<h1>';
      }
    },
    {
      method: 'GET',
      path: '/GetProductName',
      handler: async function (request) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC sp_Get_Product_Name :name',
          {
            replacements: { name: request.query.product },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return result;
      }
    }
  ]);
}

export default ProductRoutes;
