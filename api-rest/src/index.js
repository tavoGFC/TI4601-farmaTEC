import hapi from 'hapi';

import ClientRoutes from './api/v1/client/index';
import EmployeeRoutes from './api/v1/employee/index';
import OrderRoutes from './api/v1/order/index';
import PharmacyRoutes from './api/v1/pharmacy/index';
import ProductRoutes from './api/v1/product/index';
import ScheduleRoutes from './api/v1/schedule/index';

const init = async () => {
  const server = hapi.server({
    port: 8080,
    host: '0.0.0.0',
    routes: {
      cors: true
    }
  });

  try {
    ClientRoutes(server);
    EmployeeRoutes(server);
    OrderRoutes(server);
    PharmacyRoutes(server);
    ProductRoutes(server);
    ScheduleRoutes(server);

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
