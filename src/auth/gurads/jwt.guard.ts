import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class JwtAuthGard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log("gaurd runs jwt")
      return super.canActivate(context)
  }
} 