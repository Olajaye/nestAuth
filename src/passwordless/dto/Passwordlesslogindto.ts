import { IsEmail } from 'class-validator';

export class PasswordlessloginDto{
  @IsEmail()
  destination: string
}