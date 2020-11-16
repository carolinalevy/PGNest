import { Test, TestingModule } from '@nestjs/testing';
import { ObtenerDatosService } from './obtener-datos.service';

describe('ObtenerDatosService', () => {
  let service: ObtenerDatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObtenerDatosService],
    }).compile();

    service = module.get<ObtenerDatosService>(ObtenerDatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
