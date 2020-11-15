import { Controller, Param } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Especialidad } from './Especialidad';
import { Horario } from './Horario';
import { Medico } from './Medico';
import { TurnoService } from './turno.service';

@Controller('turno')
export class TurnoController {
    constructor(private turnoService: TurnoService) { };

    @Get('horario')
    public getListaDeHorarios(): Horario[] {
        return this.turnoService.getListaHorarios();
    }

    @Get('medico/:especialidad')
    public getListaDeMedicos(@Param('especialidad') especialidad: string): Medico[] {
        return this.turnoService.getListaMedicos(especialidad);
    }

    @Get('especialidades')
    public getListaDeEspecialidades(): Especialidad[] {
        return this.turnoService.getListaEspecialidades();
    }

}
