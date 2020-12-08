import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrarseService } from './registrarse/registrarse.service';
import { RegistrarseController } from './registrarse/registrarse.controller';
import { TurnoController } from './turno/turno.controller';
import { TurnoService } from './turno/turno.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { GuardarTurnoController } from './guardar-turno/guardar-turno.controller';
import { GuardarTurnoService } from './guardar-turno/guardar-turno.service';
import { TurnoModule } from './turno/turno.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TurnoGuardado } from './guardar-turno/TurnoGuardado';
import { LoginModule } from './login/login.module';
import { RegistrarseModule } from './registrarse/registrarse.module';

@Module({

  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot(),
    TurnoModule,
    LoginModule,
    RegistrarseModule,
  ],
  controllers: [AppController, LoginController, RegistrarseController, GuardarTurnoController],
  providers: [AppService, LoginService, RegistrarseService, GuardarTurnoService],
})
export class AppModule { }
