import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import * as fs from 'fs';
import { Registro } from './Registro';

@Injectable()
export class RegistrarseService {
    
    private listaRegistro: Registro[];

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

    public getDatosUsuarioRegistrado(nombre: String): Registro {
        let datos = fs.readFileSync('resources/registro.csv', 'utf8');
        let personas = datos.split("\n")
                .map(p => p.replace('\r', '')).map(p => p.split(','));

        for (let i =0; i< personas.length; i++) {
            if (nombre == personas[i][1]) {
                let datosUsuario = new Registro (parseInt(personas[i][0]), personas[i][1], personas[i][2], personas[i][3], personas[i][4], personas[i][5], parseInt(personas[i][6]), personas[i][7]);
                return datosUsuario;
            }
        }
        return null;
    }

}

// mostrar error si los parametros no estan completos --> en js o en service?