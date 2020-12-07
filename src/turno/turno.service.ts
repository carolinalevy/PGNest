import { Injectable } from '@nestjs/common';
import { Especialidad } from './Especialidad.entity';
import { Horario } from './Horario.entity';
import { Medico } from './Medico.entity';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';

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

    public async getListaHorarios(): Promise<Horario[]> {
        let listaDeHorarios: Promise<Horario[]> = this.loadHorario();
        return await listaDeHorarios;
    }

     public async getListaMedicos(especialidad: string): Promise<Medico[]> {
        let listaDeMedicos: Promise<Medico[]> = this.loadMedico();
        return (await listaDeMedicos).filter(medico => medico.getEspecialidad() == especialidad);
    }

    public async getListaEspecialidades(): Promise<Especialidad[]> {
        let listaDeEspecialidades: Promise<Especialidad[]> = this.loadEspecialidad();
        return await listaDeEspecialidades;
    }



    private async loadMedico(): Promise<Medico[]> {
        const medicos: Medico[] = await this.medicoRepository.find(
            { relations: ["Especialidad_nombreEspecialidades"] }
        );
        return medicos;
    }

    private async loadHorario(): Promise<Horario[]> {
        const horarios = await this.horarioRepository.find();
        return horarios;
    }

    private async loadEspecialidad(): Promise<Especialidad[]> {
        const especialidades: Especialidad[] =await this.especialidadRepository.find(
            { relations: ["medico_especialidad"] }
        );
        return especialidades;
    }
}  
