const { Pool } = require('pg');

const client = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: 'travel_gallery',
});

async function connect(client_) {
  try {
    await client_.connect();
    console.log('client connected');
  } catch (err) {
    console.log(err);
  }
}

connect(client);
module.exports = client;
