import { Test, TestingModule } from '@nestjs/testing';
import { SystemRolesService } from './system-roles.service';

describe('SystemRolesService', () => {
  let service: SystemRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemRolesService],
    }).compile();

    service = module.get<SystemRolesService>(SystemRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
