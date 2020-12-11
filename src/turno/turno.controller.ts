import { Controller, Param } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Especialidad } from './Especialidad.entity';
import { Horario } from './Horario.entity';
import { Medico } from './Medico.entity';
import { TurnoService } from './turno.service';

@Controller('turno')
export class TurnoController {
    constructor(private turnoService: TurnoService) { };

    @Get('horario/:fecha')
    public getListaDeHorarios(@Param('fecha') fecha: string): Promise<Horario[]> {
        return this.turnoService.getListaHorarios(fecha);
    }

    @Get('medico/:especialidad')
    public getListaDeMedicos(@Param('especialidad') especialidad: string): Promise<Medico[]> {
        return this.turnoService.getListaMedicos(especialidad);
    }

    @Get('especialidades')
    public getListaDeEspecialidades(): Promise<Especialidad[]> {
        return this.turnoService.getListaEspecialidades();
    }

}
