import type { HttpContext } from '@adonisjs/core/http'
import { createAuthValidator } from '../validator/user.js'
import User from '#models/user'

export default class AuthController {
  async index({}: HttpContext) {
    // we want to return a paginated list of posts
  }

  async store({ request, response }: HttpContext) {
    // we want to save a post
    const user = await request.validateUsing(createAuthValidator)
    const existingUser = await User.findBy('email', user.email)

    if (existingUser) {
      return response.conflict({
        message: 'This email is already used ',
      })
    }
  }

  async show({}: HttpContext) {
    // we want to return a post by its id
  }
}
