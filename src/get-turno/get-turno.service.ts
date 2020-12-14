import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TurnoGuardado } from 'src/guardar-turno/TurnoGuardado.entity';
import { Registro } from 'src/registrarse/Registro.entity';
import { Equal, Repository } from 'typeorm';
import { HistorialTurnoDTO } from './historialTurnos.DTO';

@Injectable()
export class GetTurnoService {
  
    constructor(
    @InjectRepository(Registro)
    private readonly registroRepository : Repository<Registro>,
    @InjectRepository(TurnoGuardado)
    private readonly turnoGuardadoRepository: Repository<TurnoGuardado>
    )
    {}

    public async loadTurnos(email: string): Promise<HistorialTurnoDTO[]> {
            let paciente: Registro = await this.registroRepository.findOne({ where: { email: Equal(email) } });
            let pacienteDNI =  paciente.getDni();

            const result = await this.turnoGuardadoRepository.query(
                "select c.idConsulta, m.nombre as NombreMedico, m.apellido as ApellidoMedico, m.Especialidades_nombreEspecialidad as Especialidad, h.fecha, h.turno "+
                " from consulta c inner join medicos m on c.Medicos_idMedicos = m.idMedicos inner join horario h on h.turno_id = c.Horario_turno_id where c.DNI  = ? order by h.fecha, h.turno ", 
                [pacienteDNI]
                );                                                                    
            let turnos: HistorialTurnoDTO[] = [];
            result.forEach(element => {
                let h: HistorialTurnoDTO = new HistorialTurnoDTO(
                                            element['idConsulta'],
                                            element['NombreMedico'],
                                            element['ApellidoMedico'],
                                            element['Especialidad'],
                                            element['fecha'],
                                            element['turno']
                );
                turnos.push(h);
            });
            return turnos;
        }

    
}
