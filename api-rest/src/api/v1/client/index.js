import Db from '../../../models/farmatecSanJose';
import Sequelize from 'sequelize';

function ClientRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Clients',
      handler: function (request, h) {
        return '<h1>Clients Test Successful!<h1>';
      }
    },

    {
      method: 'GET',
      path: '/GetClientOrders',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Client_Orders :In_Date, :Out_Date',
          {
            replacements: { In_Date: request.query.in, Out_Date: request.query.out },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        const result_orders_clients = Promise.all(
          result.map(async (client) => {
            const order = await db.query(
              'EXEC sp_Get_Order_ID :id',
              {
                replacements: { id: client.Or_ID },
                type: Sequelize.QueryTypes.SELECT
              }
            );
            const product = await db.query(
              'EXEC sp_Get_Product_ID :id',
              {
                replacements: { id: order[0]["Pd_ID"] },
                type: Sequelize.QueryTypes.SELECT
              }
            );
            return {
              'order': { 'id': order[0]["Or_ID"], 'date': order[0]["Or_Date"], 'client': order[0]["Or_Client_ID"], 'product': product[0]["Pd_Name"], 'price': client["Price"] },
              'client': { 'id': order[0]["Or_Client_ID"], 'name': client["Cl_First_Name"] + ' ' + client["Cl_Last_Name_1"] + ' ' + client["Cl_Last_Name_2"] }
            }
          })
        );
        return result_orders_clients
      }
    },
    {
      method: 'GET',
      path: '/GetAveragePaymentClient',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Average_Payment :In_Date, :Out_Date',
          {
            replacements: { In_Date: request.query.in, Out_Date: request.query.out },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return result;
      }
    },
    {
      method: 'GET',
      path: '/GetTopThreeClients',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Top_Three_Clients :In_Date, :Out_Date',
          {
            replacements: { In_Date: request.query.in, Out_Date: request.query.out },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/CreateClient',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC sp_Add_Client :id: :first_name, :last_name1, :last_name2, :account_id, :phone_number, :type, :city, :password',
          {
            replacements: {
              id: request.query.id, first_name: request.query.name, last_name1: request.query.last1,
              last_name2: request.query.last2, account_id: request.query.legalid, phone_number: request.query.phone, type: request.query.type,
              city: request.query.city, password: request.query.pass
            },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        console.log('se ejecuta sp');
        return JSON.stringify(result);
      }
    },
    {
      method: 'GET',
      path: '/GetClientId',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC sp_Get_Client_ID :id',
          {
            replacements: { id: request.query.client },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return result;
      }
    },
    {
      method: 'GET',
      path: '/Login',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC sp_Get_Employee_Name :nameQuery',
          {
            replacements: { nameQuery: request.query.name },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        if (JSON.stringify(result) === '[]') {
          const result2 = await db.query(
            'EXEC sp_Get_Client_Name :nameQuery',
            {
              replacements: { nameQuery: request.query.name },
              type: Sequelize.QueryTypes.SELECT
            }
          );
          if (JSON.stringify(result2) === '[]') {
            return '0'
          }
          return { 'id': result2[0]["Cl_ID"], type: 4 };
        }
        return { 'id': result[0]["Emp_ID"], type: result[0]["Emp_User_Access"] };
      }
    },

  ]);
}

export default ClientRoutes;

