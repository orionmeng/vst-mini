import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const skins = [
    { name: "Onion", weaponType: "Goat", rarity: "Diamond", imageUrl: null },
    { name: "Cosmos", weaponType: "Goat", rarity: "Diamond", imageUrl: null },
    { name: "Gokster", weaponType: "Goat", rarity: "Diamond", imageUrl: null },
    { name: "Arthwook", weaponType: "Goat", rarity: "Radiant", imageUrl: null },
    { name: "Pickles", weaponType: "Food", rarity: "Gold", imageUrl: null },
    { name: "Tomato", weaponType: "Food", rarity: "Silver", imageUrl: null },
    { name: "Bread", weaponType: "Food", rarity: "Bronze", imageUrl: null },
    { name: "Coke", weaponType: "Drink", rarity: "Immortal", imageUrl: null },
  ];

  await prisma.skin.createMany({
    data: skins,
    skipDuplicates: true,
  });

  console.log(`Seeded ${skins.length} skins.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
