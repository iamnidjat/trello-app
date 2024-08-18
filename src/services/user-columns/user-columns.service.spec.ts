import { Test, TestingModule } from '@nestjs/testing';
import { UserColumnsService } from './user-columns.service';

describe('UserColumnsService', () => {
  let service: UserColumnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserColumnsService],
    }).compile();

    service = module.get<UserColumnsService>(UserColumnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
