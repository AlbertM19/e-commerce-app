module.exports = {
     HOST: process.env.HOST,
     DB: process.env.DB,
     USER: process.env.DBUSER,
     PASS: process.env.DBPASS,
     dialect: process.env.DIALECT,
     pool: {
          max: parseInt(process.env.MAX, 10),
          min: parseInt(process.env.MIN, 10),
          aquire: parseInt(process.env.AQUIRE, 10),
          idle: parseInt(process.env.IDLE, 10)
     }
}