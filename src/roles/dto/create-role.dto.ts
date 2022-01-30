import {IsString, Length} from "class-validator";


export class CreateRoleDto{
    @IsString({message: "Must be a string"})
    @Length(4, 16, {message: "Wrong value"})
    readonly value: string;

    @IsString({message: "Must be a string"})
    readonly description: string;
}