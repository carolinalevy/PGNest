import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { get } from 'http';
import { RegistrarseService } from './registrarse.service';
import { Registro } from './Registro';

@Controller('registrarse')
export class RegistrarseController {

    constructor(private registrarseService: RegistrarseService){};

    // @Get()
    // public loadInfo(): Registro[] {
    //     return this.registrarseService.loadInfo();
    // }

    @Post()
    create(@Body() registro: any): string {
        return this.registrarseService.create(registro)}
}


