import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';

function PharmacyRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Pharmacy',
      handler: function(request, h) {
        return '<h1>Pharmacy Test Successful!<h1>';
      }
    },
    {
      method: 'GET',
      path: '/GetRaisedMoney',
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

export default PharmacyRoutes;
