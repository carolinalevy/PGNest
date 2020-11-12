import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Especialidad } from './Especialidad';
import { Horario } from './Horario';
import { Medico } from './Medico';
import { TurnoService } from './turno.service';

@Controller('turno')
export class TurnoController {
    constructor(private turnoService : TurnoService){};

    @Get()
    public getListaDeHorarios(): Horario[]{
        return this.turnoService.getListaHorarios();
    }
 
    @Get()
    public getListaDeMedicos(): Medico[]{
        return this.turnoService.getListaMedicos();
    }

    @Get()
    public getListaDeEspecialidades():Especialidad[]{
        return this.turnoService.getListaEspecialidades();
    }

}
