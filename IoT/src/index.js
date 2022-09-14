const app = require('./app');

async function start() {
  await app.listen(3000);
  console.log('Listening on port 3000');
}

start();