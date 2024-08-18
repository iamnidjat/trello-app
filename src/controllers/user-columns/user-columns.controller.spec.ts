import { Test, TestingModule } from '@nestjs/testing';
import { UserColumnsController } from './user-columns.controller';

describe('UserColumnsController', () => {
  let controller: UserColumnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserColumnsController],
    }).compile();

    controller = module.get<UserColumnsController>(UserColumnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
