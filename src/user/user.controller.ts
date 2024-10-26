import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    // GET localhost:3000/user/
    @Get('/')
    getUsers() {
        return this.userService.getUsers();
    }

    // GET localjost:3000/user/1
    @Get('/:userId')
    getUserById(@Param('userId') userId: string) {
       return this.userService.getUserById(Number(userId));
        }

    //POST localhost:3000/user/
    // BODY {"nome": "Walter"}
    @Post('/')
    createUser(@Body() user: CreateUserDto) {
       return this.userService.createUser(user);
    }

    // PATCH localhost:3000/user/1
    // BODY { "name": "Walter", "age": 18}
   @Patch('/:userId')
  updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdatedUserDto) {
    return this.userService.updateUser(Number(userId), updateUserDto);
  }
}
