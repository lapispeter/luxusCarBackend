import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import CarController from '../controllers/carController.js';
import BookingController from '../controllers/bookingController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/cars', CarController.index);
router.get('/cars/:id', CarController.show);
router.post('/cars', CarController.store);
router.put('/cars/:id', CarController.update);
router.delete('/cars/:id', CarController.destroy);

router.get('/bookings', BookingController.index);
router.get('/bookings/:id', BookingController.show);
router.post('/bookings', BookingController.store);
router.put('/bookings/:id', BookingController.update);
router.delete('/bookings/:id', BookingController.destroy);

export default router
