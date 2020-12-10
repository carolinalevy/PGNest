import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('consulta')
export class TurnoGuardado {

    @PrimaryGeneratedColumn()
    private idConsulta: number;

    @Column()
    private fecha: Date;

    @Column()
    private pacientes_DNI: number;

    @Column()
    private Medicos_idMedicos: number;

    @Column()
    private Horario_turno_id: number;
    
    constructor (fecha: Date, pacientes_DNI: number, Medicos_idMedicos: number, Horario_turno_id: number) {
        this.fecha = fecha;
        this.pacientes_DNI = pacientes_DNI;
        this.Medicos_idMedicos = Medicos_idMedicos;
        this.Horario_turno_id= Horario_turno_id;
    }

    public getFecha(): Date {
        return this.fecha;
    }

    public getPacientes_DNI(): number {
        return this.pacientes_DNI;
    }

    public getMedico(): number {
        return this.Medicos_idMedicos;
    }

    public getHorarioTurnoId(): number {
        return this.Horario_turno_id;
    }

}