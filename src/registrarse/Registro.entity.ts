import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Pacientes')
export class Registro{
    @PrimaryGeneratedColumn()
    private dni:number;

    @Column()
    private email:string;

    @Column()
    private password:string;

    @Column()
    private nombre:string;

    @Column()
    private apellido:string;

    @Column()
    private direccion:string;

    @Column()
    private celular:number;

    @Column()
    private cobertura:string;

    constructor(dni:number, email:string, password:string, nombre:string,
        apellido:string, direccion:string, celular:number, cobertura:string){
            this.dni= dni;
            this.email=email;
            this.password=password;
            this.nombre=nombre;
            this.apellido=apellido;
            this.direccion=direccion;
            this.celular=celular;
            this.cobertura=cobertura;
        }  

    public getEmail():string{
        return this.email;
    }

    public getPassword():string{
        return this.password;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getApellido(): string{
        return this.apellido;
    }

    public getDni():number{
        return this.dni;
    }

    public getCelular():number{
        return this.celular;
    }

    public getDireccion():string{
        return this.direccion;
    }

    public getCobertura():string{
        return this.cobertura;
    }
}