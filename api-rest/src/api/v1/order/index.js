import Db from '../../../models/farmatecSanJose';
import Sequelize from 'sequelize';
import moment  from 'moment';

function OrderRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Orders',
      handler: function (request, h) {
        return '<h1>Orders Test Successful!<h1>';
      }
    },
    {
      method: 'GET',
      path: '/GetAveragePayment',
      handler: async function (request, h) {
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
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Month_Order_Type_Payment :Type, :Month',
          {
            replacements: { Type: request.query.type, Month: request.query.month },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return result[0][""];
      }
    },
    {
      method: 'GET',
      path: '/GetOrdersClient',
      handler: async function (request, h) {
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
    },
    {
      method: 'GET',
      path: '/AddOrder',
      handler: async function (request) {
        const db = await Db.connect();
        const result = await db.query(
          'INSERT INTO [Order] (Or_Date, Or_Client_ID, Or_State, Or_Type, Or_Pharmacy_ID, Pd_ID, Pd_Quantity, Price) ' +
          'VALUES ' +
          '(:date, :client, :state, :type, :pharmacy, :product, :quantity, :price)',
          {
            replacements: {
              date: moment().format(),
              client: request.query.client,
              state: request.query.state,
              type: request.query.type,
              pharmacy: request.query.pharmacy,
              product: request.query.product,
              quantity: request.query.quantity,
              price: request.query.price
            },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        console.log(result);
        return result;
      }
    }
  ]);
}

export default OrderRoutes;
