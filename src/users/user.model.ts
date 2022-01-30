import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserCreationAttrs{
    email: string,
    password: string;
}

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: "Unique identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'somemail@gmail.com', description: "User email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'somepass12312', description: "User password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: "Banned or not"})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Flood', description: "Reason of banning"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string


    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[];
}

