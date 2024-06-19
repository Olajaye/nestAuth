import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

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
export class AuthService {

  constructor(private jwtService: JwtService) { }
  
  validateUser(authPayloadDto: AuthPayloadDto) {
    const findUser = fakerUsers.find(user => user.username === authPayloadDto.username)
    if (!findUser) return null;
    if (authPayloadDto.password === findUser.password) {
      const { password, ...user } = findUser
      const token = this.jwtService.sign(user)
      
      return token
    }
    
  }
}
