import Db from '../../../models/farmatecSanJose';
import Sequelize from 'sequelize';

function OrderRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Orders',
      handler: function(request, h) {
        return '<h1>Orders Test Successful!<h1>';
      }
    },
    {
      method: 'GET',
      path: '/GetAveragePayment',
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
      path: '/GetTypeOrderMonth',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Month_Order_Type_Payment :Type, :Month',
          {
            replacements: { Type: value, Month: value },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/GetOrdersClient',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC sp_Get_Order_Client_ID :client_id',
          {
            replacements: { client_id: request.query.client },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return JSON.stringify(result);
      }
    }
  ]);
}

export default OrderRoutes;
