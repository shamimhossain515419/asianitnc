import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async () => {
  try {
    const result = await prisma.user.findMany();
    return NextResponse.json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", code: 404, data: e });
  }
};
