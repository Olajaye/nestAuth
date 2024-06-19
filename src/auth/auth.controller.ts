import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { LocalGaurd } from './gurads/local.guard';
import { JwtAuthGard } from './gurads/jwt.guard';

@Controller('auth')
export class AuthController {


  constructor(private authService:AuthService  ){}

  @Post("login")
  @UseGuards(LocalGaurd)
  login(@Req() req: Request) {
    console.log("controller")
    return req.user

    
  }


  @Get('status')
  @UseGuards(JwtAuthGard)
  status(@Req() req: Request) {
    console.log("inside Auth controller")
    return req.user
  }

}
