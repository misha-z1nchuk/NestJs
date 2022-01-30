import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto{

    @ApiProperty({example: 'email', description: "User email"})
    @IsString({message: "Email must be string"})
    @IsEmail({}, {message: "Uncorrect email"})
    readonly email: string;


    @ApiProperty({example: 'password', description: "User password"})
    @IsString({message: "Email must be string"})
    @Length(4, 16, {message: "Error validation password"})
    readonly password: string;
}