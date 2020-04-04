require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  dialectOptions: {
    useUTC: false, // for reading from database
  },
  timezone: '05:00',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
