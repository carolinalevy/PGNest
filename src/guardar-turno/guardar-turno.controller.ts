import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { GuardarTurnoService } from './guardar-turno.service';

@Controller('guardar-turno')
export class GuardarTurnoController {

    constructor (private guardarTurnoService: GuardarTurnoService) {
    };

    @Post()
    create (@Body() turnoGuardado: any) {
        return this.guardarTurnoService.create(turnoGuardado);
    }
}
