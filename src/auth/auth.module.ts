import {forwardRef, Module} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";


@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`,
      }),
      forwardRef(() => UsersModule),
      JwtModule.register({
          secret: process.env.PRIVATE_KEY,
          signOptions: {
              expiresIn: '24h'
          }
      })
  ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
