import { Test, TestingModule } from '@nestjs/testing';
import { RegistrarseService } from './registrarse.service';

describe('RegistrarseService', () => {
  let service: RegistrarseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrarseService],
    }).compile();

    service = module.get<RegistrarseService>(RegistrarseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

