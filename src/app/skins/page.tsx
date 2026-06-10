import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function SkinsPage() {
  const skins = await prisma.skin.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Skins</h1>
      <ul className="space-y-3">
        {skins.map((skin) => (
          <li
            key={skin.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              <Link
                href={`/skins/${skin.id}`}
                className="font-semibold hover:underline"
              >
                {skin.name}
              </Link>
              <p className="text-sm text-gray-500">
                {skin.weaponType} · {skin.rarity}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
