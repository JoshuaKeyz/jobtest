module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'rest_api',
      user: 'postgres',
      password: 'example',
      host: '127.0.0.1',
      port: 5555
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds:{
      directory: __dirname + '/db/seeds/development'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'rest_api_test',
      user: 'postgres',
      password: 'example',
      host: '127.0.0.1',
      port: 5555
    },
    migrations:{
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  production: {
    client: 'pg', 
    connection:process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
};
