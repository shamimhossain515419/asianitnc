import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (req: Request, res: Response) => {
  const { searchParams }: any = new URL(req.url);
  const id = parseInt(searchParams.get("product_id"));
  try {
    const result = await prisma.point_list.findMany({
      where: {
        product_id: id,
      },
    });
    return NextResponse.json({
      message: "Success",
      code: 200,
      data: result,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
