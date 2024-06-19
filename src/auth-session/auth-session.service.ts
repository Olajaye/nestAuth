import { Injectable } from '@nestjs/common';
import { CreateAuthSessionDto } from './dto/create-auth-session.dto';
import { UpdateAuthSessionDto } from './dto/update-auth-session.dto';


const fakerUsers = [
  {
    id: 1,
    username: "gbolahan",
    password: "password"
  },
  {
    id: 2,
    username: "jayeola",
    password: "password123"
  }
]

@Injectable()
export class AuthSessionService {


  findOne(username: string) {
   const user = fakerUsers.find(user => user.username === username)
    return user;
  }

  async validateUser(username: string, password:string): Promise<any> {
    const user = this.findOne(username)
    if (user && user.password === password) {
      const { password, ...rest } = user
      return rest
    }
    return null
  }


  create(createAuthSessionDto: CreateAuthSessionDto) {
    return 'This action adds a new authSession';
  }

  findAll() {
    return `This action returns all authSession`;
  }

 

  update(id: number, updateAuthSessionDto: UpdateAuthSessionDto) {
    return `This action updates a #${id} authSession`;
  }

  remove(id: number) {
    return `This action removes a #${id} authSession`;
  }
}
