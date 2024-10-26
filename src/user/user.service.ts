import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    private lastId: number = 3;
    private users = [
        {
            id: 1,
            name: 'Walter',
            age: 18
        },
        {
            id: 2,
            name: 'Douglas',
            age: 25
        },
        {
            id: 3,
            name: 'João',
            age: 35
        }
    ];

    updateUser(userId: Number, user: UpdatedUserDto) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            throw new NotFoundException('Usuário não encontrado.');
        }
        const userToUpdate = this.users[userIndex];
        const updatedUser = {
            ...userToUpdate,
            ...user
        }
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }
    createUser(user: CreateUserDto) {
        const newUser = {
            ...user,
            id: ++this.lastId
        }
        this.users.push(newUser);
        return newUser;
    }
    getUserById(userId: number) {
        const user = this.users.find(user => user.id === userId);
        //const user2 = this.users.find(function(user) {
        //    return user.id === userId;
        //});
        if (!user) {
            throw new NotFoundException('Usuário não encontrado.');
        }
        return user;
    }
    getUsers() {
        return this.users;
    }
}
