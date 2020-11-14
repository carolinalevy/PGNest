import { Test, TestingModule } from '@nestjs/testing';
import { GuardarTurnoService } from './guardar-turno.service';

describe('GuardarTurnoService', () => {
  let service: GuardarTurnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuardarTurnoService],
    }).compile();

    service = module.get<GuardarTurnoService>(GuardarTurnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
