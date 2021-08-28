import ApiError from '../exceptions/apiError.js'
import TokenService from '../services/TokenService.js'

export default function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization
    const accessToken = authorizationHeader.split(' ')[1]
    const userData = TokenService.validateAccessToken(accessToken)

    if (!authorizationHeader || !accessToken || !userData) {
      return next(ApiError.UnauthorizedError())
    }

    req.user = userData
    next()
  } catch (error) {
    return next(ApiError.UnauthorizedError())
  }
}
