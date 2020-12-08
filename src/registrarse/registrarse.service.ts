import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Registro } from './Registro.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegistrarseService {

    constructor(
        @InjectRepository(Registro)
        private readonly registroRepository: Repository<Registro>
        ) {}
    
    //private listaRegistro: Registro[];

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

    public async create(registro: any): Promise <Registro> {
        const nuevoRegistro: Registro = await this.registroRepository.save( new Registro(registro.dni, registro.email, registro.password, registro.nombre,
            registro.apellido, registro.direccion, registro.celular, registro.cobertura));
        // if (nuevoRegistro.getDni() && nuevoRegistro.getEmail() && nuevoRegistro.getPassword() && nuevoRegistro.getNombre()
        //     && nuevoRegistro.getApellido() && nuevoRegistro.getDireccion() && nuevoRegistro.getCelular() && nuevoRegistro.getCobertura()) {
        //     // this.listaRegistro.push(nuevoRegistro);
        //     fs.appendFileSync('resources/registro.csv',
        //         "\n" +
        //         nuevoRegistro.getDni() + ","
        //         + nuevoRegistro.getEmail() + ","
        //         + nuevoRegistro.getPassword() + ","
        //         + nuevoRegistro.getNombre() + "," 
        //         + nuevoRegistro.getApellido() + "," 
        //         + nuevoRegistro.getDireccion() + "," 
        //         + nuevoRegistro.getCelular() + ","
        //         + nuevoRegistro.getCobertura()
        //     );
        //     return "ok";
        // }
        // else {
        //     return "parametros incorrectos";
        // }
        return nuevoRegistro;
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