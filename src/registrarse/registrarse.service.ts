import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Registro } from './Registro.entity';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroDTO } from './Registro.dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common/enums/http-status.enum';

@Injectable()
export class RegistrarseService {

    constructor(
        @InjectRepository(Registro)
        private readonly registroRepository: Repository<Registro>
    ) { }


    public async createRegistro(registro: RegistroDTO): Promise<Registro> {
       
        const nuevoRegistro: Registro = await this.registroRepository.save(
            new Registro(
                registro.DNI,
                registro.email,
                registro.nombre,
                registro.apellido,
                registro.telefono,
                registro.cobertura,
                registro.contraseña));
        console.log(nuevoRegistro);
        if (nuevoRegistro.getEmail() != "" || nuevoRegistro.getEmail() != null || nuevoRegistro.getDni() != 0 || nuevoRegistro.getDni != null ||
            nuevoRegistro.getNombre() != "" || nuevoRegistro.getNombre() != null || nuevoRegistro.getApellido() != "" || nuevoRegistro.getApellido() != null
         || nuevoRegistro.getCobertura() != "" || nuevoRegistro.getCobertura() != null || nuevoRegistro.getCelular() != 0 || nuevoRegistro.getCelular != null ||
         nuevoRegistro.getContraseña() != "" || nuevoRegistro.getContraseña() != null)
             
         return nuevoRegistro;                
    }

    public async getDatosRegistro(dni: number): Promise<Registro> {
        try {
            let response: Registro = await this.registroRepository.findOne({
                where: [{
                    "DNI": Equal(dni)
                }]
            });
            console.log(response);
            return response;
        }
        catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request" + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

}

// mostrar error si los parametros no estan completos --> en js o en service?