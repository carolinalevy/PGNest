import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ('usuario')
export class Usuario{
    @PrimaryGeneratedColumn()
    private email: string;

    @Column()
    private contraseña: string;

    @Column()
    private pacientes_DNI: number;

    public constructor ( contraseña: string, pacientes_DNI: number) {
        this.contraseña = contraseña;
        this.pacientes_DNI = pacientes_DNI;
    }

    public getEmail(): string{
        return this.email;
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