import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const skins = await prisma.skin.findMany({
      orderBy: { name: "asc" },
    });
    return NextResponse.json(skins);
  } catch (error) {
    console.error("[GET /api/skins]", error);
    return NextResponse.json(
      { error: "Failed to fetch skins" },
      { status: 500 }
    );
  }
}
