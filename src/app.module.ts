import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnoModule } from './turno/turno.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { LoginModule } from './login/login.module';
import { RegistrarseModule } from './registrarse/registrarse.module';
import { GuardarTurnoModule } from './guardar-turno/guardar-turno.module';

@Module({

  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot(),
    TurnoModule,
    LoginModule,
    RegistrarseModule,
    GuardarTurnoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
