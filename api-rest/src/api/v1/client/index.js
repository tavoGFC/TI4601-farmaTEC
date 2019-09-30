import Db from '../../../models/farmatecHeredia';
import Sequelize from 'sequelize';

function ClientRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Clients',
      handler: function(request, h) {
        return '<h1>Clients Test Successful!<h1>';
      }
    },

    {
      method: 'GET',
      path: '/GetClientOrders',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Client_Orders :In_Date, :Out_Date',
          {
            replacements: { In_Date: value, Out_Date: value },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/GetAveragePaymentClient',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Average_Payment :In_Date, :Out_Date',
          {
            replacements: { In_Date: value, Out_Date: value },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/GetTopThreeClients',
      handler: async function(request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Top_Three_Clients :In_Date, :Out_Date',
          {
            replacements: { In_Date: value, Out_Date: value },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return JSON.stringify(result);
      }
    }
  ]);
}

export default ClientRoutes;
