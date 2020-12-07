import { Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";

@Entity('especialidades')
export class Especialidad {
    [x: string]: any;
    @PrimaryColumn()
    private nombreEspecialidad: string;

    @ManyToOne((type) => Especialidad, especialidades => especialidades.medicos)
    public especialidades: Especialidad[];

    constructor(nombreEspecialidad: string) {
        this.nombreEspecialidad = nombreEspecialidad;
    }

    public getEspecialidad(): string {
        return this.nombreEspecialidad;
    }
}