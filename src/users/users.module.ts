import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {Sequelize} from "sequelize-typescript";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User])
  ]
})
export class UsersModule {}
