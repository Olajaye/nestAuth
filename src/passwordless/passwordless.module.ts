import { Module } from '@nestjs/common';
import { PasswordlessService } from './passwordless.service';
import { PasswordlessController } from './passwordless.controller';
import { MagicLoginStragey } from './strategy/local.stragey';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/protected.strateg';


@Module({
  imports: [JwtModule.register({
    secret: "gbolahanAuth",
    signOptions: {
      expiresIn: "1h",
    }
  })],
  controllers: [PasswordlessController],
  providers: [PasswordlessService, MagicLoginStragey, JwtStrategy],
})
export class PasswordlessModule {}
