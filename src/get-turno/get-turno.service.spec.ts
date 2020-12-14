import { Test, TestingModule } from '@nestjs/testing';
import { GetTurnoService } from './get-turno.service';

describe('GetTurnoService', () => {
  let service: GetTurnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTurnoService],
    }).compile();

    service = module.get<GetTurnoService>(GetTurnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
