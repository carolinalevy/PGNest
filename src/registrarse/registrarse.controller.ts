import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { get } from 'http';
import { RegistrarseService } from './registrarse.service';
import { Registro } from './Registro';

@Controller('registrarse')
export class RegistrarseController {

    constructor(private registrarseService: RegistrarseService){};

    @Post()
    create(@Body() registro: any): string {
        return this.registrarseService.create(registro);
    }

    @Get(':usuario')
    public getDatosUsuarioRegistrado(@Param('usuario') usuario: string) {
        return this.registrarseService.getDatosUsuarioRegistrado(usuario);
    }
}


