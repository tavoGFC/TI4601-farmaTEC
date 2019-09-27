import Db from '../../../models/farmatec';
import Sequelize from 'sequelize';

function ClientRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Welcome',
      handler: function (request, h) {
        return '<h1>Welcome to the API - FarmaTEC</h1>';
      }
    },
    {
      method: 'GET',
      path: '/GetAllClient',
      handler: async function (request, h) {
        const db =  await Db.connect();
        const result = await db.query('SELECT * FROM [Client]', { type: Sequelize.QueryTypes.SELECT });
        return JSON.stringify(result);
      }
    }
  ]);
}

export default ClientRoutes
