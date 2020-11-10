import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrarseService } from './registrarse/registrarse.service';
import { RegistrarseController } from './registrarse/registrarse.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
        'client'),
    }),
  ],
  controllers: [AppController, RegistrarseController],
  providers: [AppService, RegistrarseService],
})
export class AppModule { }
