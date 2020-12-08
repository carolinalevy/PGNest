import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity ('usuario')
export class Usuario{
    @PrimaryColumn()
    private email: string;

    @Column()
    private contraseña: string;

    @Column()
    private pacientes_DNI: number;

    public constructor (email:string, contraseña: string) {
        this.email = email;
        this.contraseña = contraseña;
    }

    public getEmail(): string{
        return this.email;
    }

    public setEmail(email:string){
        this.email = email;
    }

    public getContraseña(): string{
        return this.contraseña;
    }

    public setContraseña(contraseña: string) {
        this.contraseña = contraseña;
    }

    public getPacientesDNI(): number {
        return this.pacientes_DNI;
    }
}