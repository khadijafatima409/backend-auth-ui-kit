import type { HttpContext } from '@adonisjs/core/http'
import { createAuthValidator } from '../validator/user.js'

import User from '#models/user'

export default class UserController {
  async index({}: HttpContext) {
    // we want to return a paginated list of posts
  }

  async store({ request, response }: HttpContext) {
    // we want to save a post
    const payload = await request.validateUsing(createAuthValidator)
    const existingUser = await User.findBy('email', payload.email)

    if (existingUser) {
      return response.conflict({
        message: 'This email is already used ',
      })
    }

    const user = await User.create({
      first_name: payload.first_name,
      last_name: payload.last_name,
      email: payload.email,
      phone_number: payload.phone_number,
      password: payload.password,
    })
    return response.ok({ message: 'User Register Sucesfully', data: user })
  }

  async show({}: HttpContext) {
    // we want to return a post by its id
  }
}
