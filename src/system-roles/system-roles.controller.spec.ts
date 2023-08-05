import { Test, TestingModule } from '@nestjs/testing';
import { SystemRolesController } from './system-roles.controller';
import { SystemRolesService } from './system-roles.service';

describe('SystemRolesController', () => {
  let controller: SystemRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemRolesController],
      providers: [SystemRolesService],
    }).compile();

    controller = module.get<SystemRolesController>(SystemRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
