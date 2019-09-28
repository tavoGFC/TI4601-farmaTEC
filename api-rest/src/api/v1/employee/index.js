import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';

function EmployeeRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Employee',
      handler: function(request, h) {
        return '<h1>Employee Test Successful!<h1>';
      }
    }
  ]);
}

export default EmployeeRoutes;
