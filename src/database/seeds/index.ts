import UserSeeder from './user';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const runSeed = async () => {
  console.log('Seeding...');
  await new UserSeeder(prisma).run();
  console.log('Seeding complete');
};

void runSeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    await prisma.$disconnect();
    throw err;
  });
