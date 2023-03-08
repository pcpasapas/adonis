// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class SecurityController {
  public async register({ auth, request, response }) {
    const v = await request.validate(UserValidator)
    await User.create(v)

    try {
      await auth.use('web').attempt(request.input('email'), request.input('password'))
      response.redirect().toRoute('PagesController.index')
    } catch (err) {
      console.log(err)
      return response.badRequest('Invalid credentials')
    }
  }

  public async login({ auth, request, response }) {
    try {
      await auth.use('web').attempt(request.input('email'), request.input('password'))
      response.redirect().toRoute('PagesController.index')
    } catch (err) {
      console.log(err)
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }) {
    await auth.use('web').logout()
    response.redirect().toRoute('PagesController.index')
  }
}
