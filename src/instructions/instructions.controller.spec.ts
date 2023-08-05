import { Test, TestingModule } from '@nestjs/testing';
import { InstructionsController } from './instructions.controller';
import { InstructionsService } from './instructions.service';

describe('InstructionsController', () => {
  let controller: InstructionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstructionsController],
      providers: [InstructionsService],
    }).compile();

    controller = module.get<InstructionsController>(InstructionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
