import { Especialidad } from "./Especialidad";

export class Medico{
    private nombreMedico: string;
    private especialidad: string;

   constructor (nombreMedico: string, especialidad:string){
       this.nombreMedico = nombreMedico;
       this.especialidad = especialidad;
   }

   public getMedico(): string{
       return this.nombreMedico;
   }

   public getEspecialidad():string{
       return this.especialidad;
   }
}