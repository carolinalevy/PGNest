import { Injectable } from '@nestjs/common';
import { TurnoGuardado } from './TurnoGuardado';
import * as fs from 'fs';
import { Horario } from 'src/turno/Horario.entity';

@Injectable()
export class GuardarTurnoService {

    public create(turnoGuardado: any) {
        const nuevoTurno: TurnoGuardado = new TurnoGuardado (turnoGuardado.dia, turnoGuardado.horario, turnoGuardado.medico,
            turnoGuardado.especialidad, turnoGuardado.cobertura);
        
        if (nuevoTurno.getDia() && nuevoTurno.getHorario() && nuevoTurno.getMedico() && nuevoTurno.getEspecialidad() && nuevoTurno.getCobertura()) {
            fs.appendFileSync('resources/turnosGuardados.csv',
                "\n" +
                nuevoTurno.getDia() + ','
                + nuevoTurno.getHorario() + ','
                + nuevoTurno.getMedico() + ','
                + nuevoTurno.getEspecialidad() + ','
                + nuevoTurno.getCobertura()
            );
            this.deleteHorario(nuevoTurno.getHorario());
            return "ok";
        } else {
            return "parametros incorrectos";
        }
    }

    public deleteHorario(horario: string): boolean {

        let index = -1;
        let archivoHorarios = fs.readFileSync('resources/horarios.csv', 'utf8');
    
        let horarios = archivoHorarios.replace(/\r/g, "").split('\n');
        for (let i=0; i< horarios.length; i++ ) {
            if (horario== horarios[i]) {
                index = i;
            }
        }
        let removed = [];
       
        if (index > -1) {
            removed = horarios.splice(index, 1);
        }
        fs.writeFileSync('resources/horarios.csv', horarios.join('\n'));
        return removed.length == 1;
    }
}
