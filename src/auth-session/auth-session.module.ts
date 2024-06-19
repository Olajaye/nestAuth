import { Module } from '@nestjs/common';
import { AuthSessionService } from './auth-session.service';
import { AuthSessionController } from './auth-session.controller';
import { LocalStrategy } from './Strategy/local-strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session-serializer/session.serilizer';

@Module({
  imports:[PassportModule.register({session: true})],
  controllers: [AuthSessionController],
  providers: [AuthSessionService, LocalStrategy, SessionSerializer],
})
export class AuthSessionModule {}
