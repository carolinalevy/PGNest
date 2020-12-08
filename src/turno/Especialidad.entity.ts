import { Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";
import { Medico } from "./Medico.entity";

@Entity('especialidades')
export class Especialidad {
    [x: string]: any;
    @PrimaryColumn()
    private nombreEspecialidad: string;

    @OneToMany((type) => Medico, medicos => medicos.especialidad)
    public medicos : Medico[];
    // @ManyToOne((type) => Especialidad, especialidades => especialidades.medicos)
    // public especialidades: Especialidad[];

    constructor(nombreEspecialidad: string) {
        this.nombreEspecialidad = nombreEspecialidad;
    }

    public getEspecialidad(): string {
        return this.nombreEspecialidad;
    }
}