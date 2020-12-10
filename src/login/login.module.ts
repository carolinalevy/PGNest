import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from 'src/registrarse/Registro.entity';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([
        Registro  
        ])
    ],
    controllers: [LoginController],
    providers: [LoginService]
})
export class LoginModule {}

