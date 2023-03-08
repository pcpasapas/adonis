// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminController {
  public async index({ view }) {
    return view.render('Admin/index')
  }
}
