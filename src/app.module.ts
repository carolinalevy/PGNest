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
import { ObtenerDatosService } from './obtener-datos/obtener-datos.service';
import { ObtenerDatosController } from './obtener-datos/obtener-datos.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
        'client'),
    }),
  ],
  controllers: [AppController, LoginController, RegistrarseController, TurnoController, GuardarTurnoController, ObtenerDatosController],
  providers: [AppService, LoginService, RegistrarseService, TurnoService, GuardarTurnoService, ObtenerDatosService],
})
export class AppModule { }
