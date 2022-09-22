import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async getAll() {
    return await User.all()
  }

  public async getOne({ request }: HttpContextContract) {
    const reqId = request.param('id')
    return await User.findOrFail(reqId)
  }

  public async create({ request }: HttpContextContract) {
    const { username, email, password, avatarUrl } = request.body()
    return await User.create({ username, email, password, avatarUrl })
  }

  public async update({ request }: HttpContextContract) {
    const reqId = request.param('id')
    const { username, email, password, avatarUrl } = request.body()
    const user = await User.findOrFail(reqId)
    return await user.merge({ username, email, password, avatarUrl }).save()
  }
  public async delete({ request }: HttpContextContract) {
    const reqId = request.param('id')
    const user = await User.findOrFail(reqId)
    return await user.delete()
  }
}
