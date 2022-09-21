import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async getAll(ctx: HttpContextContract) {
    return await User.all()
  }

  public async getOne(ctx: HttpContextContract) {
    const reqId = ctx.request.param('id')
    return await User.findOrFail(reqId)
  }

  public async create(ctx: HttpContextContract) {
    const { username, email, password, avatarUrl } = ctx.request.body()
    return await User.create({ username, email, password, avatarUrl })
  }

  public async update(ctx: HttpContextContract) {
    const reqId = ctx.request.param('id')
    const { username, email, password, avatarUrl } = ctx.request.body()
    const user = await User.findOrFail(reqId)
    return await user.merge({ username, email, password, avatarUrl }).save()
  }
  public async delete(ctx: HttpContextContract) {
    const reqId = ctx.request.param('id')
    const user = await User.findOrFail(reqId)
    return await user.delete()
  }
}
