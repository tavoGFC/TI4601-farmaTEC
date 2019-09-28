import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';

function ScheduleRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Schedule',
      handler: function(request, h) {
        return '<h1>Schedule Test Successful!<h1>';
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

export default ScheduleRoutes;
