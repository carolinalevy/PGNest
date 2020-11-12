export class Horario{
    private horario: string;

   constructor (horario: string){
       this.horario = horario;
   }

   public getHorario(): string{
       return this.horario;
   }
}