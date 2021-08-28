import { Router } from 'express'
import UserController from '../controllers/UserController.js'
import { body } from 'express-validator'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router()

router.post(
  '/auth/registration',
  body('username').notEmpty().isLength({ min: 4, max: 20 }),
  body('password').notEmpty().isLength({ min: 6, max: 32 }),
  body('name').notEmpty(),
  UserController.registration
)
router.post('/auth/login', UserController.login)
router.post('/auth/logout', UserController.logout)
router.get('/auth/refresh', UserController.refresh)
router.get('/user', authMiddleware, UserController.getUser)

export default router
