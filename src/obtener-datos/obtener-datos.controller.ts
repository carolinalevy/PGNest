import { Controller, Get, Param } from '@nestjs/common';
import { ObtenerDatosService } from './obtener-datos.service';

@Controller('obtener-datos')
export class ObtenerDatosController {
    
    constructor (private obtenerDatosService: ObtenerDatosService) {
    }

    @Get(':usuario')
    public getDatosUsuarioRegistrado(@Param('usuario') usuario: string) {
        return this.obtenerDatosService.getDatosUsuarioRegistrado(usuario);
    }
}

// utilizar el mismo controller y servicio para usar los datos del usuario. Cargar y listar.