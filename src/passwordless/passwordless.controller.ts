import { Body, Controller, Get, Post, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { PasswordlessService } from './passwordless.service';
import { MagicLoginStragey } from './strategy/local.stragey';
import { PasswordlessloginDto } from './dto/Passwordlesslogindto';
import { AuthGuard } from '@nestjs/passport';


@Controller('passwordless')
export class PasswordlessController {
  constructor(private readonly passwordlessService: PasswordlessService, private stratrgy: MagicLoginStragey) { }
  
  @Post("login")
  login(@Req() req, @Res() res, @Body(new ValidationPipe()) body: PasswordlessloginDto) { 
    this.passwordlessService.validateUser(body.destination)
    return this.stratrgy.send(req, res)
  }
  

  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback')
  callback(@Req() req){
    return this.passwordlessService.generateToken(req.user)
  }


  @UseGuards(AuthGuard('jwt'))
  @Get("protected")
  protected(@Req() req) {
    return req.user
  }
}
