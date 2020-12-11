import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from 'src/registrarse/Registro.entity';
import { Horario } from 'src/turno/Horario.entity';
import { Medico } from 'src/turno/Medico.entity';
import { GuardarTurnoController } from './guardar-turno.controller';
import { GuardarTurnoService } from './guardar-turno.service';
import { TurnoGuardado } from './TurnoGuardado.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TurnoGuardado,
            Registro,
            Horario,
            Medico
        ])
      ],
      controllers: [GuardarTurnoController],
      providers: [GuardarTurnoService]

})
export class GuardarTurnoModule {}
