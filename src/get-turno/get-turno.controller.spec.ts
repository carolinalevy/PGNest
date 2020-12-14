import { Test, TestingModule } from '@nestjs/testing';
import { GetTurnoController } from './get-turno.controller';

describe('GetTurnoController', () => {
  let controller: GetTurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTurnoController],
    }).compile();

    controller = module.get<GetTurnoController>(GetTurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
