const Sequelize = require('sequelize');

const User = require('./models/user');
const Event = require('./models/event');

const { DataTypes } = Sequelize;

const sequelizeInstance = new Sequelize(
  'd709egh5eg4i31', // ! nama dabatabase
  'mxxpmuhmnelxnn', // ! username
  '3247a0710653c568c8ccd114ff9c8b346bdef959ac7fe9f5ee948bc9a5efbd7e', { // ! password
  host: 'ec2-52-23-45-36.compute-1.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
});

sequelizeInstance.authenticate()
.then((res) => console.log('Connection has been established successfully. ', res))
.catch((error) => console.error('Unable to connect to the database:', error))


const userModel = User(sequelizeInstance, DataTypes)
const eventModel = Event(sequelizeInstance, DataTypes)

module.exports = {
  userModel,
  eventModel
};


