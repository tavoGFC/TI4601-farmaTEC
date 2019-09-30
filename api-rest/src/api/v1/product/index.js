import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';
const momentTime = require('moment');

function ProductRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Product',
      handler: function(request, h) {
        const date_ob = momentTime().format('L'); // 2019-09-30T15:17:23-06:00
        //const sqlDateStr = new Date().format('yyyy-mm-dd hh-MM-ss');
        return `${date_ob}`;
      }
    }
  ]);
}

export default ProductRoutes;
//new Date().format("yyyy-mm-dd hh-MM-ss");
