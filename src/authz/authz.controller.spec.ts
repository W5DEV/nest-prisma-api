import { Test, TestingModule } from '@nestjs/testing';
import { AuthzController } from './authz.controller';
import { AuthzService } from './authz.service';

describe('AuthzController', () => {
  let controller: AuthzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthzController],
      providers: [AuthzService],
    }).compile();

    controller = module.get<AuthzController>(AuthzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
