import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './stragies/local.strategy';
import { JwtStrategy } from './stragies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "gbolahanAuth", // keep in env variables
      signOptions: {expiresIn: "1h"}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
