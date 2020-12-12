import { Injectable } from '@nestjs/common';
import { TurnoGuardado } from './TurnoGuardado.entity';
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
    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>,
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>,
    @InjectRepository(Registro)
    private readonly pacientesRepository: Repository<Registro>
    ) {}

    public async create(turnoGuardado: ConsultaDTO): Promise<TurnoGuardado> {
        let paciente = await this.pacientesRepository.findOne({where: {email: Equal(turnoGuardado.userEmail)}} );
        console.log(turnoGuardado.dia);
    

        const nuevoTurno: TurnoGuardado = await this.turnoGuardadoRepository.save(new TurnoGuardado (paciente.getDni(), 
                                            turnoGuardado.medicoId, turnoGuardado.horarioId));
            console.log("turno guardado.horario" +turnoGuardado.horarioId);
        return nuevoTurno;
    }

}
