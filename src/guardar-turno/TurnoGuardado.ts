export class TurnoGuardado {
    private dia: Date;
    private horario: string;
    private medico: string;
    private especialidad: string;
    private cobertura: string;
    
    constructor (dia: Date, horario: string, medico: string, especialidad: string, cobertura: string) {
        this.dia = dia;
        this.horario = horario;
        this.medico = medico;
        this.especialidad = especialidad;
        this.cobertura = cobertura;
    
    }

    public getDia(): Date {
        return this.dia;
    }

    public getHorario(): string {
        return this.horario;
    }

    public getMedico(): string {
        return this.medico;
    }

    public getEspecialidad(): string {
        return this.especialidad;
    }

    public getCobertura(): string {
        return this.cobertura;
    }

}