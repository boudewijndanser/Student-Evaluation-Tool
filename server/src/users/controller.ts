//src/users/controller.ts
import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import User from './entity';

@JsonController()
export default class UserController {

  @Post('/users')
  async signup(
    @Body() data: User) {
    const {password, ...rest} = data
    const entity = User.create(rest)
    await entity.setPassword(password)

    return entity.save()

    }
  

  @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
    @Param('id') id: number) {
    return User.findOneById(id)
  }

  @Authorized()
  @Get('/users')
  allUsers() {
    return User.find()
  }
}
