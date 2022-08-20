import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { hash } from 'bcrypt';

class UserSeeder {
  totalSeeder: number;

  constructor(private prisma: PrismaClient) {
    this.totalSeeder = 10;
  }

  async run() {
    console.log('Seeding User...');

    await this.prisma.user.deleteMany();
    await this.prisma.$queryRaw`alter table users AUTO_INCREMENT = 1`;

    for (let index = 1; index <= this.totalSeeder; index++) {
      const email = faker.unique(faker.internet.email).toLowerCase();
      const password = await hash('12345', 10);

      await this.prisma.user.upsert({
        where: {
          email,
        },
        update: {},
        create: {
          name: faker.name.fullName(),
          email,
          password,
        },
      });
    }
  }
}

export default UserSeeder;
