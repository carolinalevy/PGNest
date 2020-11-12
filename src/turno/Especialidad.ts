export class Especialidad{
    private nombreEspecialidad: string;

   constructor (nombreEspecialidad: string){
       this.nombreEspecialidad = nombreEspecialidad;
   }

   public getEspecialidad(): string{
       return this.nombreEspecialidad;
   }
}