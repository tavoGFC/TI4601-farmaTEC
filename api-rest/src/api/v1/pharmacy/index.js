import Db from '../../../models/farmatecSanJose';
import Sequelize from 'sequelize';

function PharmacyRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/Pharmacy',
      handler: function (request, h) {
        return '<h1>Pharmacy Test Successful!<h1>';
      }
    },
    {
      method: 'GET',
      path: '/GetRaisedMoney',
      handler: async function (request, h) {
        const db = await Db.connect();
        const allDataPharmacy = await db.query(
          'EXEC sp_Get_Pharmacy_Admin_ID :admin_ID',
          {
            replacements: { admin_ID: request.query.admin },
            type: Sequelize.QueryTypes.SELECT
          }
        )
        const result = await db.query(
          'EXEC usp_Get_Raised_Money :Pharmacy_ID',
          {
            replacements: { Pharmacy_ID: allDataPharmacy[0]["Ph_Legal_ID"] },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        return { 'name': allDataPharmacy[0]["Ph_Name"], 'city': allDataPharmacy[0]["Ph_City"], 'amount': result[0][""] };
      }
    },
    {
      method: 'GET',
      path: '/GetBranchRaisedMoney',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Branch_Raised_Money :In_Date, :Out_Date',
          {
            replacements: { In_Date: request.query.in, Out_Date: request.query.out },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        const result2 = Promise.all(
          result.map(async (pharmacy) => {
            const allDataPharmacy = await db.query(
              'EXEC sp_Get_Pharmacy_ID :id',
              {
                replacements: { id: pharmacy.Or_Pharmacy_ID },
                type: Sequelize.QueryTypes.SELECT
              }
            );
            return { 'id': pharmacy["Or_Pharmacy_ID"], 'name': allDataPharmacy[0]["Ph_Name"], 'amount': pharmacy[""] }
          })
        );
        return result2;
      }
    },
    {
      method: 'GET',
      path: '/GetBranchTypeRaisedMoney',
      handler: async function (request, h) {
        const db = await Db.connect();
        const result = await db.query(
          'EXEC usp_Get_Branch_Type_Raised_Money :In_Date, :Out_Date',
          {
            replacements: { In_Date: request.query.in, Out_Date: request.query.out },
            type: Sequelize.QueryTypes.SELECT
          }
        );
        const result2 = Promise.all(
          result.map(async (pharmacy) => {
            const allDataPharmacy = await db.query(
              'EXEC sp_Get_Pharmacy_ID :id',
              {
                replacements: { id: pharmacy.Or_Pharmacy_ID },
                type: Sequelize.QueryTypes.SELECT
              }
            );
            return { 'id': pharmacy["Or_Pharmacy_ID"], 'name': allDataPharmacy[0]["Ph_Name"], 'amount': pharmacy[""], 'type': pharmacy["Or_Type"] }
          })
        );
        return result2;
      }
    },
    {
      method: 'GET',
      path: '/GetAllBranch',
      handler: async function () {
        const db = await Db.connect();
        const result = await db.query(
          'SELECT P.Ph_Legal_ID as id, P.Ph_Name as name, P.Ph_City as city, P.Ph_Phone_Number as phone, convert(varchar, S.Sc_Open_Hour, 8) as open_hour, convert(varchar, S.Sc_Close_Hour, 8)  as close_hour  ' +
          'FROM Pharmacy P ' +
          'INNER JOIN Schedule S on S.Sc_ID = P.Ph_Schedule_ID',
          { type: Sequelize.QueryTypes.SELECT }
        );
        return result.map((item) => {
          item['photo'] = 'http://www.farmaciascondefa.com/images/farmacia.png';
          return item;
        });
      }
    }
  ]);
}

export default PharmacyRoutes;
