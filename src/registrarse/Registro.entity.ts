import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Pacientes')
export class Registro{
    @PrimaryColumn()
    private DNI:number;

    @Column()
    private email:string;

    @Column()
    private nombre:string;

    @Column()
    private apellido:string;

    @Column()
    private telefono:number;

    @Column()
    private cobertura:string;

    constructor(DNI:number, email:string, nombre:string,
        apellido:string, telefono:number, cobertura:string){
            this.DNI= DNI;
            this.email=email;
            this.nombre=nombre;
            this.apellido=apellido;
            this.telefono = telefono;
            this.cobertura=cobertura;
        }  

    public getEmail():string{
        return this.email;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getApellido(): string{
        return this.apellido;
    }

    public getDni():number{
        return this.DNI;
    }

    public getCelular():number{
        return this.telefono;
    }

    public getCobertura():string{
        return this.cobertura;
    }
}