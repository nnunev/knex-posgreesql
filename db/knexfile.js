// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'db-postgresql-nyc3-70999-hypeshape-do-user-11606674-0.b.db.ondigitalocean.com',
      port:'25060',
      user:     'hype',
      password: 'AVNS_swBPvfFIdEIbLVs99ux',
      database: 'pagila',
      //schema: 'mystore'
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    // migrations: {
    //       tableName: 'mystore'
    //     }
  },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
