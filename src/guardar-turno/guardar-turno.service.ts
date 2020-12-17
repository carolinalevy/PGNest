import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TurnoGuardado } from './TurnoGuardado.entity';
import { Horario } from 'src/turno/Horario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteDateColumn, Equal, Repository } from 'typeorm';
import { ConsultaDTO } from './consulta.dto';
import { Medico } from 'src/turno/Medico.entity';
import { Registro } from 'src/registrarse/Registro.entity';

@Injectable()
export class GuardarTurnoService {

    constructor(
        @InjectRepository(TurnoGuardado)
        private readonly turnoGuardadoRepository: Repository<TurnoGuardado>,
        @InjectRepository(Horario)
        private readonly horarioRepository: Repository<Horario>,
        @InjectRepository(Medico)
        private readonly medicoRepository: Repository<Medico>,
        @InjectRepository(Registro)
        private readonly pacientesRepository: Repository<Registro>
    ) { }

    public async create(turnoGuardado: ConsultaDTO): Promise<TurnoGuardado> {
        let paciente = await this.pacientesRepository.findOne({ where: { email: Equal(turnoGuardado.userEmail) } });
        console.log(turnoGuardado.dia);
        console.log(turnoGuardado.horarioId);
        console.log(paciente)

        const nuevoTurno: TurnoGuardado = await this.turnoGuardadoRepository.save(new TurnoGuardado (paciente.getDni(), 
                                            turnoGuardado.medicoId, turnoGuardado.horarioId));

           if (nuevoTurno.getIdConsulta())
                  return nuevoTurno;
    }

    public async geTurnoCompleto(idConsulta: number): Promise<any> {

        const consulta: TurnoGuardado = await this.turnoGuardadoRepository.findOne(idConsulta);

        const medico: Medico = await this.medicoRepository.findOne(consulta.getMedico());

        const horario: Horario = await this.horarioRepository.findOne(consulta.getHorarioTurnoId());
        const paciente: Registro = await this.pacientesRepository.findOne(consulta.getDni());
        const turno = {
            "nombreMedico": medico.getApellidoNombre(),
            "fecha": horario.getFecha(),
            "horario": horario.getTurno(),
            "cobertura": paciente.getCobertura()
        }

        return turno;
    }

    public async getNombreMEdicoElegido(idMedico: number): Promise<any> {

        const nombreMedico: any = await this.medicoRepository.findOne(
            { where: { idMedicos: Equal(idMedico) } }
        )

        console.log(nombreMedico)
        return nombreMedico;
    }

    public async getHorarioElegido(idHorario: number) {
        const horarioElegido: any = await this.horarioRepository.findOne(
            { where: { turno_id: Equal(idHorario) } }
        )
        console.log(horarioElegido);
        return horarioElegido;
    }

    public async borrarTurno(idConsulta: number): Promise<boolean> {
        try {
        let turno = await this.turnoGuardadoRepository.findOne(idConsulta);
        console.log(idConsulta + "consulta");
console.log(turno);
        if ( turno != null){
            await this.turnoGuardadoRepository.remove(turno);
        return true;
        }
        return false;
    }catch (error){
        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: "there is an error in the request, " + error,
          }, HttpStatus.NOT_FOUND);
    }
    }

}
