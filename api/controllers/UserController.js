import UserService from '../services/UserService.js'
import { validationResult } from 'express-validator'
import ApiError from '../exceptions/apiError.js'
import TokenService from '../services/TokenService.js'

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }

      const { username, name, password } = req.body
      const userData = await UserService.registration(username, name, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      })

      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body
      const userData = await UserService.login(username, password)

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        path: '/'
      })

      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

  async logout(req, res, next) {
    try {
      const { 'auth._refresh_token.local': refreshToken  } = req.cookies
      const token = await UserService.logout(refreshToken)
      res.clearCookie('refreshToken')

      return res.json(token)
    } catch (error) {
      next(error)
    }
  }

  async refresh(req, res, next) {
    try {
      const { 'auth._refresh_token.local': refreshToken  } = req.cookies
      const userData = await UserService.refresh(refreshToken)

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
      })

      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

  async getUser(req, res, next) {
    try {
      const authorizationHeader = req.headers.authorization
      const accessToken = authorizationHeader.split(' ')[1]
      const userData = TokenService.validateAccessToken(accessToken)
      const user = await UserService.getUser(userData.id)

      res.json(user)
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController()
