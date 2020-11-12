export class Registro{
    private dni:number;
    private email:string;
    private password:string;
    private nombre:string;
    private apellido:string;
    private direccion:string;
    private celular:number;
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