import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ConsultaDTO } from './consulta.dto';
import { GuardarTurnoService } from './guardar-turno.service';
import { TurnoGuardado } from './TurnoGuardado.entity';

@Controller('guardar-turno')
export class GuardarTurnoController {

    constructor (private guardarTurnoService: GuardarTurnoService) {
    };

    @Post('turno-nuevo')
    public create (@Body() turnoGuardadoDTO: ConsultaDTO): Promise<TurnoGuardado> {
        console.log("en el controller");
        return this.guardarTurnoService.create(turnoGuardadoDTO);
    }
}
