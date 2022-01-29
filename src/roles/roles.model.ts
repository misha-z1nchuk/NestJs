import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface RoleCreationAttrs{
    value: string,
    description: string;
}

@Table({tableName: 'users'})
export class Role extends Model<Role, RoleCreationAttrs>{

    @ApiProperty({example: '1', description: "Unique identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: "Value of role"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administrator', description: "Description of role"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;
}

