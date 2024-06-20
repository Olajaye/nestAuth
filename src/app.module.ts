import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
// import { AuthSessionModule } from './auth-session/auth-session.module';
import { PasswordlessModule } from './passwordless/passwordless.module';

@Module({
  imports: [PasswordlessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
