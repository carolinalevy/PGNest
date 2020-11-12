import { Test, TestingModule } from '@nestjs/testing';
import { RegistrarseController } from './registrarse.controller';

describe('RegistrarseController', () => {
  let controller: RegistrarseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrarseController],
    }).compile();

    controller = module.get<RegistrarseController>(RegistrarseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
