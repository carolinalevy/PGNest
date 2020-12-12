import { Controller, Get } from '@nestjs/common';
import { Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { RegistrarseService } from './registrarse.service';
import { RegistroDTO } from './Registro.dto';
import { Registro } from './Registro.entity';

@Controller('registrarse')
export class RegistrarseController {

    constructor(private registrarseService: RegistrarseService){};

    @Post('crear-registro')
    createRegistro(@Body() registro: RegistroDTO): Promise <Registro>{
        return this.registrarseService.createRegistro(registro);
    }

    @Get(':email')
    public getDatosUsuarioRegistrado(@Param('email') email:string) {
        return this.registrarseService.getDatosRegistro(email);
    }

    @Put(':email')
    modifyRegistro(@Body() registroNuevo: RegistroDTO, @Param('email') email:string): Promise <Registro>{
        return this.registrarseService.modificarRegistro(registroNuevo, email);
    }

}


