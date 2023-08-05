import { Test, TestingModule } from '@nestjs/testing';
import { InstructionsService } from './instructions.service';

describe('InstructionsService', () => {
  let service: InstructionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructionsService],
    }).compile();

    service = module.get<InstructionsService>(InstructionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
