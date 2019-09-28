import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';

function ClientRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Clients',
      handler: function(request, h) {
        return '<h1>Employee Test Successful!<h1>';
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
    },
    {
      method: 'GET',
      path: '/GetClientOrders',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query('EXEC', {
          type: Sequelize.QueryTypes.SELECT
        });
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/GetAveragePaymentClient',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query('EXEC', {
          type: Sequelize.QueryTypes.SELECT
        });
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/GetTopThreeClients',
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

export default ClientRoutes;
