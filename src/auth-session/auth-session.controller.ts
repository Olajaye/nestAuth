import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthSessionService } from './auth-session.service';
import { CreateAuthSessionDto } from './dto/create-auth-session.dto';
import { UpdateAuthSessionDto } from './dto/update-auth-session.dto';
import { LocalAuthGuard } from './Guard/localAuthGurad';
import { AuthSessionGuard } from './Guard/sessionguard';

@Controller('auth-session')
export class AuthSessionController {
  constructor(private readonly authSessionService: AuthSessionService) {}

  @UseGuards(LocalAuthGuard)
  @Post('logins')
  login(@Request() req: any) {
    return "user loged in";
  }

  @UseGuards(AuthSessionGuard)
  @Get('protected')
  findAll(@Request() req: any) {
    return req.user;
  }

  
}
