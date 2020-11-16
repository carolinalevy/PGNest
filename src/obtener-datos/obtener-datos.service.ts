import { Injectable } from '@nestjs/common';
import { Registro } from 'src/registrarse/Registro';
import * as fs from 'fs';

@Injectable()
export class ObtenerDatosService {

    public getDatosUsuarioRegistrado(nombre: String): Registro {
        let datos = fs.readFileSync('resources/registro.csv', 'utf8');
        let personas = datos.split("\n")
                .map(p => p.replace('\r', '')).map(p => p.split(','));

        for (let i =0; i< personas.length; i++) {
            if (nombre == personas[i][3]) {
                let datosUsuario = new Registro (parseInt(personas[i][0]), personas[i][1], personas[i][2], personas[i][3], personas[i][4], personas[i][5], parseInt(personas[i][6]), personas[i][7]);
                return datosUsuario;
            }
        }
        return null;
    }
    

}
