import { Test, TestingModule } from '@nestjs/testing';
import { GuardarTurnoController } from './guardar-turno.controller';

describe('GuardarTurnoController', () => {
  let controller: GuardarTurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuardarTurnoController],
    }).compile();

    controller = module.get<GuardarTurnoController>(GuardarTurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
