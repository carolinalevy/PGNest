import { Controller } from '@nestjs/common';
import { TurnoService } from './turno.service';

@Controller('turno')
export class TurnoController {
    constructor(private turnoService : TurnoService){};

    
}
