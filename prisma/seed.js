import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  try {
    for (let i = 0; i < 5; i++) {
      await prisma.specialist.create({
        data: {
          description: faker.person.bio(),
          experience: faker.number.int({ max: 20 }),
          speciality: faker.person.jobTitle(),
          userId: String(faker.number.int()),
          rating: faker.number.float({ max: 10 }),
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
