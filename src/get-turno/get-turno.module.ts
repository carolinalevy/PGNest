import { Module } from '@nestjs/common';
import { GetTurnoService } from './get-turno.service';
import { GetTurnoController } from './get-turno.controller';
import { TurnoGuardado } from 'src/guardar-turno/TurnoGuardado.entity';
import { Registro } from 'src/registrarse/Registro.entity';
import { Horario } from 'src/turno/Horario.entity';
import { Medico } from 'src/turno/Medico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        TurnoGuardado,
        Registro,
        Horario,
        Medico
    ])
  ],
  providers: [GetTurnoService],
  controllers: [GetTurnoController]
})
export class GetTurnoModule {}
