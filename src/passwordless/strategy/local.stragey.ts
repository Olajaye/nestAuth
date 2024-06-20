import { Injectable, Logger } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"

import Strategy from 'passport-magic-login'
import { PasswordlessService } from "../passwordless.service"

@Injectable()
export class MagicLoginStragey extends PassportStrategy(Strategy) {


  private readonly logger = new Logger(MagicLoginStragey.name)


  constructor(private readonly passwordlessService: PasswordlessService) {
    super({
      secret: "gbolahanAuth",
      jwtOptions: {
        expiresIn: "5m"
      },
      callbackUrl: "http://localhost:3000/passwordless/login/callback",
      sendMagicLink: async (destination, href) => {
        //send emails
        this.logger.debug(`Sending email to ${destination} with link ${href}`)
      },
      verify: async(payload, callback)=> callback(null, this.validate(payload))

    })
  }


  validate(payload: { destination: string }) {
    const user = this.passwordlessService.validateUser(payload.destination)
    return user
    
  }
}