module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'rest_api',
      user: 'postgres',
      password: 'example',
      host: 'db',
      port: 5432
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
    connection:{
      databbase: 'rest_api_test',
      user: 'postgres',
      password: 'example',
      host: 'db',
      port: 5432
    },
    migrations:{
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + 'db/seeds/development'
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
