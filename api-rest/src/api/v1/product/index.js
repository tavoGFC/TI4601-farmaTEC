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
    },
    {
      method: 'GET',
      path: '/GetAllClient',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query('EXEC', {
          type: Sequelize.QueryTypes.SELECT
        });
        return JSON.stringify(result);
      }
    }
  ]);
}

export default ProductRoutes;
