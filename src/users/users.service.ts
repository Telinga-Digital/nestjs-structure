import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { User } from '@prisma/client';

export type FindManyArgs = {
  where?: any;
  skip?: number;
  take?: number;
  orderBy?: any;
  cursor?: any;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(params?: FindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(params);
  }

  async findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findOne(params?: FindManyArgs): Promise<User> {
    return this.prisma.user.findFirst(params);
  }

  async create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async update(id: number, user: User): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
