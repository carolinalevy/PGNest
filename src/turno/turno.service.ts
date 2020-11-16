import { Injectable } from '@nestjs/common';
import { Especialidad } from './Especialidad';
import { Horario } from './Horario';
import { Medico } from './Medico';
import * as fs from 'fs';

@Injectable()
export class TurnoService {
    private listaMedicos: Medico[];
    private listaHorarios: Horario[];
    private listaEspecialidades: Especialidad[];

    public getListaHorarios(): Horario[] {
        let listaDeHorarios: Horario[] = this.loadHorario();
        return listaDeHorarios;
    }

    public getListaMedicos(especialidad: string): Medico[] {
        let listaDeMedicos: Medico[] = this.loadMedico();
        return listaDeMedicos.filter(medico => medico.getEspecialidad() === especialidad);
    }

    public getListaEspecialidades(): Especialidad[] {
        let listaDeEspecialidades: Especialidad[] = this.loadEspecialidad();
        return listaDeEspecialidades;
    }



    private loadMedico(): Medico[] {
        let archivo = fs.readFileSync('resources/medicos.csv', 'utf8');
        const elementos = archivo.split('\n')
            .map(p => p.replace('\r', '')).map(p => p.split(','));
        this.listaMedicos = [];
        for (let i = 0; i < elementos.length; i++) {
            let medico = new Medico(elementos[i][0], elementos[i][1]);
            this.listaMedicos.push(medico);
        }
        return this.listaMedicos;
    }

    private loadHorario(): Horario[] {
        let archivo = fs.readFileSync('resources/horarios.csv', 'utf8');
        const elementos = archivo.split('\n');
         const listaDeHorarios = [];
        for (let i = 0; i < elementos.length; i++) {
            let horario = new Horario(elementos[i]);
            listaDeHorarios.push(horario);
        }
        return listaDeHorarios;
    }

    private loadEspecialidad(): Especialidad[] {
        let archivo = fs.readFileSync('resources/especialidad.csv', 'utf8');
        const elementos = archivo.split('\n');
        let listaEspecialidades = [];
        for (let i = 0; i < elementos.length; i++) {
            let especialidad = new Especialidad(elementos[i]);
            listaEspecialidades.push(especialidad);
        }
        return listaEspecialidades;
    }
}  
