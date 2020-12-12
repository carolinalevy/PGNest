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

    @Column()
    private contraseña: string;

    constructor(DNI:number, email:string, nombre:string,
        apellido:string, telefono:number, cobertura:string, contraseña:string){
            this.DNI= DNI;
            this.email=email;
            this.nombre=nombre;
            this.apellido=apellido;
            this.telefono = telefono;
            this.cobertura=cobertura;
            this.contraseña = contraseña;
        }  

    public getEmail():string{
        return this.email;
    }

    public setEmail(email:string): void {
        this.email = email;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string): void {
        this.nombre = nombre;
    }

    public getApellido(): string{
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni():number{
        return this.DNI;
    }

    public setDni(dni:number): void {
        this.DNI = dni;
    }

    public getCelular():number{
        return this.telefono;
    }

    public setCelular(celular: number): void {
        this.telefono = celular;
    }

    public getCobertura():string{
        return this.cobertura;
    }

    public setCobertura(cobertura: string): void {
        this.cobertura = cobertura;
    }

    public getContraseña():string{
        return this.contraseña;
    }

    public setContraseña(contraseña: string): void {
        this.contraseña = contraseña;
    }
}