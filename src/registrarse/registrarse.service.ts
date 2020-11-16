import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import * as fs from 'fs';
import { Registro } from './Registro';

@Injectable()
export class RegistrarseService {
    
    private listaRegistro: Registro[];

    // private loadInfo(): void {
    //     let archivo = fs.readFileSync('registro.csv', 'utf8');
    //     const elementos = archivo.split('\n')
    //         .map(p => p.replace('\r', '')).map(p => p.split(','));
    //     this.listaRegistro = [];
    //     for (let i = 0; i < elementos.length; i++) {
    //         let nuevoRegistro = new Registro(Number(elementos[i][0]), elementos[i][1], elementos[i][2], elementos[i][3], elementos[i][4],
    //             elementos[i][5], Number(elementos[i][6]), elementos[i][7]);
    //         this.listaRegistro.push(nuevoRegistro);
    //     }
    // }

    public create(registro: any): string {
        const nuevoRegistro: Registro = new Registro(registro.dni, registro.email, registro.password, registro.nombre,
            registro.apellido, registro.direccion, registro.celular, registro.cobertura);

        if (nuevoRegistro.getDni() && nuevoRegistro.getEmail() && nuevoRegistro.getPassword() && nuevoRegistro.getNombre()
            && nuevoRegistro.getApellido() && nuevoRegistro.getDireccion() && nuevoRegistro.getCelular() && nuevoRegistro.getCobertura()) {
            // this.listaRegistro.push(nuevoRegistro);
            fs.appendFileSync('resources/registro.csv',
                "\n" +
                nuevoRegistro.getDni() + ","
                + nuevoRegistro.getEmail() + ","
                + nuevoRegistro.getPassword() + ","
                + nuevoRegistro.getNombre() + "," 
                + nuevoRegistro.getApellido() + "," 
                + nuevoRegistro.getDireccion() + "," 
                + nuevoRegistro.getCelular() + ","
                + nuevoRegistro.getCobertura()
            );
            return "ok";
        }
        else {
            return "parametros incorrectos";
        }
    }
}

// mostrar error si los parametros no estan completos --> en js o en service?