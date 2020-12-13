import { Column, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Especialidad } from "./Especialidad.entity";

@Entity('medicos')
export class Medico{
    [x: string]: any;

   @PrimaryColumn()
   private idMedicos :number;
   
   @Column()
    private nombre: string;

    @Column()
    private apellido: string;

    @Column()
    private especialidades_nombreEspecialidad: string;

    @ManyToOne((type) => Especialidad, especialidad => especialidad.medicos)
    @JoinColumn({name: 'idMedicos'})
    public especialidad : Especialidad;
    // @OneToMany((type) => Medico, medicos => medicos.especialidades)
    // public medicos : Medico;

   constructor (nombre: string, apellido: string, especialidad_nombreEspecialidad:string){
       this.nombre = nombre;
       this.apellido = apellido;
       this.especialidades_nombreEspecialidad = especialidad_nombreEspecialidad;
   }

   public getMedicoId(): number{
       return this.idMedicos;
   }

   public getApellidoNombre(): string{
       return `${this.nombre} ${this.apellido}`;
   }
   public getEspecialidad():string{
       return this.especialidades_nombreEspecialidad;
   }
}