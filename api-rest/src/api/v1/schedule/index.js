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
    }
  ]);
}

export default ScheduleRoutes;
