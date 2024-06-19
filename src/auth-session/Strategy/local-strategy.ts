import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthSessionService } from "../auth-session.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthSessionService) {
    super()
  }

  async validate(username: string, password: string): Promise<any>{
    const user = await this.authService.validateUser(username, password) 

    if (!user) {
      throw new UnauthorizedException()
    }
    console.log(user)
    console.log("local stragey")
    return user 
  }
}