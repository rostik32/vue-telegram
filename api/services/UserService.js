import UserModel from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import TokenService from './TokenService.js'
import ApiError from '../exceptions/apiError.js'

class UserService {
  async registration(username, name, password) {
    const candidate = await UserModel.findOne({ username })

    if (candidate) {
      throw ApiError.BadRequest('Пользователь с таким логином уже существует')
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await UserModel.create({
      username,
      name,
      password: hashPassword
    })
    const tokens = TokenService.generateTokens({ username, id: user._id })
    await TokenService.saveToken(user._id, tokens.refreshToken)

    return {
      ...tokens,
      user: {
        username: user.username,
        name: user.name,
        id: user._id
      }
    }
  }

  async login(username, password) {
    const user = await UserModel.findOne({ username })

    if (!user) {
      throw ApiError.BadRequest('Пользователь не найден')
    }

    const isPassEquals = await bcrypt.compare(password, user.password)

    if (!isPassEquals) {
      throw ApiError.BadRequest('Не верный логин или пароль')
    }

    const tokens = TokenService.generateTokens({ username, id: user._id })
    await TokenService.saveToken(user._id, tokens.refreshToken)

    return {
      ...tokens,
      user: {
        username: user.username,
        name: user.name,
        id: user._id
      }
    }
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }

    const userData = TokenService.validateRefreshToken(refreshToken)
    const user = await UserModel.findById(userData.id)
    const tokenFromDb = await TokenService.findToken(refreshToken)
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError()
    }

    const tokens = TokenService.generateTokens({
      username: user.username,
      id: user._id
    })
    await TokenService.saveToken(user._id, tokens.refreshToken)

    return {
      ...tokens,
      user: {
        username: user.username,
        name: user.name,
        id: user._id
      }
    }
  }

  async getUser(id) {
    const user = await UserModel.findById(id)
    return {
      user: {
        username: user.username,
        name: user.name,
        id: user._id
      }
    }
  }
}

export default new UserService()
