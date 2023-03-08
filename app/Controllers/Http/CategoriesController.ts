// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from 'App/Models/Category'

export default class CategoriesController {
  public async delete({ request, response }) {
    const categorie = await Category.findOrFail(request.input('categorie'))
    await categorie.delete()
    response.redirect().toRoute('PagesController.posts')
  }
}
