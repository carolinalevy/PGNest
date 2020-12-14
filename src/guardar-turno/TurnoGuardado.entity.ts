import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('consulta')
export class TurnoGuardado {

    @PrimaryGeneratedColumn()
    private idConsulta: number;

    @Column()
    private DNI: number;

    @Column()
    private Medicos_idMedicos: number;

    @Column()
    private Horario_turno_id: number;
    
    constructor (DNI: number, Medicos_idMedicos: number, Horario_turno_id: number) {
        //this.fecha = fecha;
        this.DNI = DNI;
        this.Medicos_idMedicos = Medicos_idMedicos;
        this.Horario_turno_id= Horario_turno_id;
    }

    public getIdConsulta(): number{
        return this.idConsulta;
    }

    public getDni(): number {
        return this.DNI;
    }

    public getMedico(): number {
        return this.Medicos_idMedicos;
    }

    public getHorarioTurnoId(): number {
        return this.Horario_turno_id;
    }

}