import {Injectable} from "@nestjs/common";


@Injectable()
export class AppService{
    getUsers(){
        return [{id: 1, name: "dfdfd"}]
    }

    getHello() {
        return {message: "get Hello"}
    }
}