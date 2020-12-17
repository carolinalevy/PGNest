import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
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
        return this.guardarTurnoService.create(turnoGuardadoDTO);
    }

    @Get('turno/:idConsulta')
    public getTurno(@Param('idConsulta') idConsulta: number): Promise<any> {
        return this.guardarTurnoService.geTurnoCompleto(idConsulta);
    }

    @Get('horario/:idHorario')
    public get(@Param('idHorario') idHorario: number): Promise<any> {
        return this.guardarTurnoService.getHorarioElegido(idHorario);
    }

    @Delete('delete/:idConsulta')
    public deleteTurno(@Param('idConsulta') idConsulta: number): Promise<boolean> {
        return this.guardarTurnoService.borrarTurno(idConsulta);
    }
}
