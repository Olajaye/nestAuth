import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { JwtService } from '@nestjs/jwt';

const fakerUsers = [
  {
    id: 1,
    name: 'gbolahan',
    email: 'olajaye@gmail.com',
  },
  {
    id: 2,
    name: 'jayeola',
    email: 'olajaye123@gmail.com',
  },
];

@Injectable()
export class PasswordlessService {
  
  constructor(private jwtService: JwtService) {
    
  }

  findOneByEmail(email: string): User | undefined {
    const user = fakerUsers.find((user) => user.email === email);
    return user;
  }

  validateUser(email: string) {
    const user = this.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  generateToken(user: User) { 
    const payload = { sub: user.id, email: user.email }
    return {
      access_token: this.jwtService.sign(payload)
    }
   }

}
