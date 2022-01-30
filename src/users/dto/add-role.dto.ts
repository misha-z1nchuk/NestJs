import {IsNumber, IsString, Length} from "class-validator";

export class AddRoleDto{
    @IsString({message: "Must be a string"})
    @Length(4, 16, {message: "Wrong value"})
    readonly value: string;

    @IsNumber( {},{message: "Must be a number"})
    readonly userId: number;
}