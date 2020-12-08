import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrarseController } from './registrarse.controller';
import { RegistrarseService } from './registrarse.service';
import { Registro } from './Registro.entity';

@Module({
        imports: [
            TypeOrmModule.forFeature([
            Registro
            ])
        ],
        controllers: [RegistrarseController],
        providers: [RegistrarseService]
})
export class RegistrarseModule {}
