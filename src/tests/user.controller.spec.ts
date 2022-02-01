import {UsersController} from "../users/users.controller";
import {UsersService} from "../users/users.service";
import {Test, TestingModule} from "@nestjs/testing";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";




describe('UserController', function () {
    let userController : UsersController;

    const mockUserService = {
        createUser: jest.fn(dto => {
            return{
                id: 5,
                ...dto
            }
        })
    };

    beforeEach(async () => {
        const module: TestingModule =await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: `.${process.env.NODE_ENV}.env`,
                }),
                JwtModule.register({
                    secret: process.env.PRIVATE_KEY,
                    signOptions: {
                        expiresIn: '24h'
                    }
                })
            ],
            controllers: [UsersController],
            providers: [UsersService],
        })
            .overrideProvider(UsersService)
            .useValue(mockUserService)
            .compile();

        userController = module.get<UsersController>(UsersController);
    })

    it('should be defined', function () {
        expect(userController).toBeDefined();
    });

    it('should create user', () => {

        expect(userController.create({email: "fdаffdsfаfdsf@gmail.com", password: "fаdsfdsf"})).toEqual({
            id: expect.any(Number),
            email: expect.any(String),
            password: expect.any(String),
        })

    })

});