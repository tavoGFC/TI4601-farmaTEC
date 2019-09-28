import hapi from 'hapi';
import ClientRoutes from './api/v1/client/index';

const init = async () => {
  const server = hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });

  try {
    ClientRoutes(server);

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
