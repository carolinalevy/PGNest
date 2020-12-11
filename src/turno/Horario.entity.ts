import { Column, Entity } from "typeorm";
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn";

@Entity('horario')
export class Horario{

    @PrimaryColumn()
    private turno_Id: number;

    @Column()
    private fecha: Date;

    @Column()
    private turno :string;


   constructor (turno_Id:number, fecha: Date, turno:string){
       this.turno_Id = turno_Id;
       this.fecha = fecha;
       this.turno= turno;
   }

   public getTurnoId(): number{
       return this.turno_Id;
   }

   public getFecha(): Date{
       return this.fecha;
   }

   public getTurno():string{
       return this.turno;
   }
}