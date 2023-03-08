import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  protected redirectTo = '/'
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    console.log('entrée')
    if (auth.use('web').user && auth.use('web').user?.role === 'admin') {
      console.log(auth.isLoggedIn)
      return await next()
    }
    response.redirect().toRoute('PagesController.index')
  }
}
