import { Injectable } from '@nestjs/common';
import { TurnoGuardado } from './TurnoGuardado';
import * as fs from 'fs';

@Injectable()
export class GuardarTurnoService {
    public create(turnoGuardado: any) {
        const nuevoTurno: TurnoGuardado = new TurnoGuardado (turnoGuardado.dia, turnoGuardado.horario, turnoGuardado.medico,
            turnoGuardado.especialidad);
        
        if (nuevoTurno.getDia() && nuevoTurno.getHorario() && nuevoTurno.getMedico() && nuevoTurno.getEspecialidad()) {
            fs.appendFileSync('resources/turnosGuardados.csv',
            "\n" +
            nuevoTurno.getDia() + ','
            + nuevoTurno.getHorario() + ','
            + nuevoTurno.getMedico() + ','
            + nuevoTurno.getEspecialidad()
            );
        return "ok";
        } else {
            return "parametros incorrectos";
        }
    }
}
