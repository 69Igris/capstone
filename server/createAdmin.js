import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting admin user creation...');
  
  const adminUsername = 'admin';
  const adminEmail = 'admin@seekho.com';
  const adminPassword = 'admin123';
  
  // Check if admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: {
      OR: [
        { username: adminUsername },
        { email: adminEmail }
      ]
    }
  });
  
  if (existingAdmin) {
    console.log('Admin user already exists!');
    console.log('Username:', existingAdmin.username);
    console.log('Email:', existingAdmin.email);
    return;
  }
  
  // Create admin user
  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  
  const admin = await prisma.user.create({
    data: {
      username: adminUsername,
      email: adminEmail,
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin'
    }
  });
  
  console.log('Admin user created successfully!');
  console.log('Username:', admin.username);
  console.log('Email:', admin.email);
  console.log('Password:', adminPassword);
  console.log('\n⚠️  Please save these credentials and change the password after first login!');
}

main()
  .catch((e) => {
    console.error('Error creating admin user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
