import {UsersService} from "../users/users.service";
import {Test, TestingModule} from "@nestjs/testing";
import {User} from "../users/user.model";
import { getModelToken } from '@nestjs/sequelize';
import {RolesService} from "../roles/roles.service";
import {Role} from "../roles/roles.model";



describe('UserService', function () {
    let service : UsersService;

    const mockUserRepository = {

    }
    const mockRoleRepository ={

    }

    beforeEach(async () => {
        const module: TestingModule =await Test.createTestingModule({
            // imports: [
            //   RolesService
            // ],
            providers: [UsersService, RolesService, {
                provide: getModelToken(User),
                useValue: mockUserRepository
            },
                {
                    provide: getModelToken(Role),
                    useValue: mockRoleRepository
                }],
        }).compile();

        service = module.get<UsersService>(UsersService);
    })

    it('should be defined', function () {
        expect(service).toBeDefined();
    });



});