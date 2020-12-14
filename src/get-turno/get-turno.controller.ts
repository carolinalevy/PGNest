import { Controller, Get, Param } from '@nestjs/common';
import { TurnoGuardado } from 'src/guardar-turno/TurnoGuardado.entity';
import { GetTurnoService } from './get-turno.service';
import { HistorialTurnoDTO } from './historialTurnos.DTO';

@Controller('get-turno')
export class GetTurnoController {
    
    constructor(private getTurnoService: GetTurnoService){};

    @Get('turnos/:email')
    public getDatosTurnos(@Param('email') email:string): Promise<HistorialTurnoDTO[] > {
        return this.getTurnoService.loadTurnos(email);
    }
}
