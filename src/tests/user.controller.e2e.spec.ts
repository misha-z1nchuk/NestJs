import {Test, TestingModule} from "@nestjs/testing";
import {HttpStatus, INestApplication} from "@nestjs/common";
import * as request from 'supertest'
import {AppModule} from "../app.module";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";


describe('UserController (e2e)', function () {
    let app: INestApplication;
    jest.setTimeout(30000);

    beforeEach(async () => {
        const moduleFixture: TestingModule =await Test.createTestingModule({
            imports: [AppModule,
                ConfigModule.forRoot({
                    envFilePath: `.${process.env.NODE_ENV}.env`,
                }),

                SequelizeModule.forRoot({
                    dialect: 'postgres',
                    host: process.env.POSTGRES_HOST,
                    port: Number(process.env.POSTGRES_PORT),
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                    models: [User, Role, UserRoles, Post],
                    autoLoadModels: false // creating tables throw models
                }),],

        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    })

    it('should be defined', function () {
        expect(app).toBeDefined();
    });

    it('accept change role', async () => {
        let tmp = (await request(app.getHttpServer())
            .get('/api')
            .expect(HttpStatus.OK)).body;
    });

    it('get Users', async () => {
        let tmp = (await request(app.getHttpServer())
            .get('/users')
            .expect(HttpStatus.OK)).body;
    });

    afterAll(async () => {
        await app.close();
    });
});

