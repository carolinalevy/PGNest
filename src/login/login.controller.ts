import { Body, Controller, Post } from '@nestjs/common';
import { Registro } from 'src/registrarse/Registro';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor( private loginService: LoginService) {
    }

    @Post('validate')
        public login(@Body() userInfo: any) :boolean {
            return this.loginService.login(userInfo);
        }
}
