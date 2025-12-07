import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkAdmin() {
  const admin = await prisma.user.findFirst({
    where: { username: 'admin' }
  });
  
  console.log('Admin user details:');
  console.log(JSON.stringify(admin, null, 2));
  
  await prisma.$disconnect();
}

checkAdmin();
