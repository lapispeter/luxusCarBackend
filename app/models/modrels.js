import User from './user.js';
import sequelize from '../database/database.js'
import Car from './car.js';
import Booking from './booking.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Car = Car;
db.Booking = Booking;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
