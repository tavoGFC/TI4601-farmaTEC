import Sequelize from 'sequelize';

const config = {
  serverMaster: '-',
  serverLocal: 'GUS-LV',

  //local
  database: 'FarmaTEC',
  user: 'user',
  password: 'pass',

  //master
  databaseMaster: '-',
  userMaster: '-',
  passMaster: '-',

  port: 1433
};

export default class farmatec {
  static async connect() {
    const db = new Sequelize(config.database, config.user, config.password, {
      dialect: 'mssql',
      host: config.serverLocal,
      port: config.port
    });

    try {
      return db
        .authenticate()
        .then(() => {
          return db;
        })
        .catch(err => {
          console.log(err.original.message);
          const db = new Sequelize(
            config.databaseMaster,
            config.user_master,
            config.passMaster,
            {
              dialect: 'mssql',
              host: config.serverMaster,
              port: config.port
            }
          );
          return db;
          s;
        });
    } catch (err) {
      console.log(err.message);
    }
  }
}
