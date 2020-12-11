import { Injectable } from '@nestjs/common';
import { Especialidad } from './Especialidad.entity';
import { Horario } from './Horario.entity';
import { Medico } from './Medico.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { Equal } from 'typeorm/find-options/operator/Equal';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';

@Injectable()
export class TurnoService {
    constructor(
        @InjectRepository(Medico)
        private readonly medicoRepository: Repository<Medico>,
        @InjectRepository(Horario)
        private readonly horarioRepository: Repository<Horario>,
        @InjectRepository(Especialidad)
        private readonly especialidadRepository: Repository<Especialidad>

    ) { }
    private listaMedicos: Medico[];
    private listaHorarios: Horario[];
    private listaEspecialidades: Especialidad[];

    public async getListaHorarios(fecha: string): Promise<Horario[]> {
        let listaDeHorarios: Promise<Horario[]> = this.loadHorario(fecha);
        return await listaDeHorarios;
    }

    public async getListaMedicos(especialidad: string): Promise<Medico[]> {
        try {
            let response: Medico[] = await this.medicoRepository.find({
                where: [{
                    "especialidades_nombreEspecialidad": Equal(especialidad)
                }]
            });
            return response;
        }
        catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request" + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getListaEspecialidades(): Promise<Especialidad[]> {
        const result = await this.especialidadRepository.query("select * from especialidades");

        let especialidades: Especialidad[] = [];
        result.forEach(element => {
            let e: Especialidad = new Especialidad(element['nombreEspecialidad']);
            especialidades.push(e);
        });
        return especialidades;
     }


    private async loadHorario(fecha: string): Promise<Horario[]> {
        const result = await this.horarioRepository.query(
            "select * from horario where not exists (select 1 from consulta where consulta.Horario_turno_id = horario.turno_id) AND horario.fecha = ? ", [fecha]
            );                                                                    
        let horarios: Horario[] = [];
        result.forEach(element => {
            let h: Horario = new Horario(element['turno_id'],
                                        element['fecha'],
                                        element['turno']);
            horarios.push(h);
        });
        return horarios;
    }

  
}  
