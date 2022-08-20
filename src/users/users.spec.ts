import { PrismaService } from './../database/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('Users Service', () => {
  let service: UsersService;

  const mockPrisma = {
    user: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrisma)
      .compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
