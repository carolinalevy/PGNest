import { Injectable } from '@nestjs/common';
import { TurnoGuardado } from './TurnoGuardado';
import * as fs from 'fs';
import { Horario } from 'src/turno/Horario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { ConsultaDTO } from './consulta.dto';
import { Medico } from 'src/turno/Medico.entity';
import { Registro } from 'src/registrarse/Registro.entity';

@Injectable()
export class GuardarTurnoService {

    constructor (
    @InjectRepository(TurnoGuardado)
    private readonly turnoGuardadoRepository: Repository<TurnoGuardado>,
    private readonly horarioRepository: Repository<Horario>,
    private readonly medicoRepository: Repository<Medico>,
    private readonly pacientesRepository: Repository<Registro>
    ) {}

    public async create(turnoGuardado: ConsultaDTO): Promise<TurnoGuardado> {
        let paciente = await this.pacientesRepository.findOne({where: {email: Equal(turnoGuardado.userEmail)}} );

        const fecha = await this.turnoGuardadoRepository.findOne({
            where: [{"fecha": Equal(turnoGuardado.dia)}]
        });

        const nuevoTurno: TurnoGuardado = await this.turnoGuardadoRepository.save(new TurnoGuardado (fecha.getFecha(), paciente.getDni(), turnoGuardado.medicoId,
            turnoGuardado.horarioId));
            console.log(turnoGuardado.horarioId);
        this.deleteHorario(turnoGuardado.horarioId);
        return nuevoTurno;
    }

    public async deleteHorario(horarioId: number): Promise<boolean> {
        let horarioToDelete: Horario = await this.horarioRepository.findOne(horarioId);
        if (horarioToDelete) {
            await this.horarioRepository.delete(horarioId);
            return true;
        } else {
            return false;
        }
    }

}
