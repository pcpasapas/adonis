import Category from 'App/Models/Category'
import CategoryValidator from 'App/Validators/CategoryValidator'

export default class PagesController {
  public async index({ view }) {
    return view.render('Pages/index')
  }

  public async posts({ view }) {
    const categories = await Category.all()
    return view.render('Pages/posts', {
      categories,
    })
  }

  public async new({ request, response }) {
    console.log(request.all())

    const v = await request.validate(CategoryValidator)
    const category = new Category()
    await category.fill(v).save()
    response.redirect().toRoute('PagesController.posts')
  }
}
