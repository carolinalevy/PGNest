export class HistorialTurnoDTO {

    readonly iDConsulta: number;
    readonly nombreMedico: string;
    readonly apellidoMedico: string;
    readonly especialidad: string;
    readonly fecha: Date;
    readonly turno: string;

    public constructor(iDConsulta: number, nombreMedico: string, apellidoMedico: string, especialidad: string, fecha: Date, turno: string) {
        this.iDConsulta = iDConsulta;
        this.nombreMedico = nombreMedico;
        this.apellidoMedico = apellidoMedico;
        this.especialidad = especialidad;
        this.fecha = fecha;
        this.turno = turno;
    }
}