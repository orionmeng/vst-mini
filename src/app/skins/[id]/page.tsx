import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function SkinDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const skin = await prisma.skin.findUnique({
    where: { id },
  });

  if (!skin) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">{skin.name}</h1>
      <p className="text-gray-500 mb-6">
        {skin.weaponType} · {skin.rarity}
      </p>
      {skin.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={skin.imageUrl} alt={skin.name} className="rounded mb-6 w-full max-w-sm" />
      )}
      <a href="/skins" className="text-sm text-blue-600 underline">
        ← Back to skins
      </a>
    </main>
  );
}
