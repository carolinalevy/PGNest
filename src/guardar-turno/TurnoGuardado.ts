export class TurnoGuardado {
    private dia: Date;
    private horario: number;
    private medico: string;
    private especialidad: string;
    
    constructor (dia: Date, horario: number, medico: string, especialidad: string) {
        this.dia = dia;
        this.horario = horario;
        this.medico = medico;
        this.especialidad = especialidad;
    }

    public getDia(): Date {
        return this.dia;
    }

    public getHorario(): number {
        return this.horario;
    }

    public getMedico(): string {
        return this.medico;
    }

    public getEspecialidad(): string {
        return this.especialidad;
    }

}