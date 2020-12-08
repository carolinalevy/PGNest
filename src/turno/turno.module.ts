import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Especialidad } from './Especialidad.entity';
import { Horario } from './Horario.entity';
import { Medico } from './Medico.entity';
import { TurnoController } from './turno.controller';
import { TurnoService } from './turno.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        Medico,
        Especialidad,
        Horario
      ])
    ],
    controllers: [TurnoController],
    providers: [TurnoService]
  })
  export class TurnoModule { }
  
