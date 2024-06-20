import { PasswordlessService } from './../passwordless.service';


import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor(private passwordlessService: PasswordlessService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:"gbolahanAuth" 
    });
  }

  validate(payload: any) {
    const user = this.passwordlessService.validateUser(payload.email)
    return `welcome on board ${user.name}`

  }
}