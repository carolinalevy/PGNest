import { Test, TestingModule } from '@nestjs/testing';
import { ObtenerDatosController } from './obtener-datos.controller';

describe('ObtenerDatosController', () => {
  let controller: ObtenerDatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObtenerDatosController],
    }).compile();

    controller = module.get<ObtenerDatosController>(ObtenerDatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
