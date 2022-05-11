const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
                lang: 'Spanish',
                missionCommander: 'Carlo',
                enrollments: 'LaunchX'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				lang: 'Spanish',
				missionCommander: 'Carlo',
                enrollments: 'LaunchX'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
                lang: 'Spanish',
                missionCommander: 'Carlo',
                enrollments: 'LaunchX'
      },
    });

    console.log('Create 2 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();