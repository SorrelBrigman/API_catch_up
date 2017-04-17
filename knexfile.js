// Update with your config settings.

module.exports = {

  test: {
    client : 'pg',
    connection: 'postgres://localhost/tv_faves_test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      director: __dirname + '/db/seeds/test'
    }
  },

  development: {
    client: 'pg',
    debug: 'true',
    connection: 'postgres://localhost/tv_faves',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds : {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
