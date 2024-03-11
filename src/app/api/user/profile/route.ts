import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

export async function GET(req: Request, res: Response) {
  try {
    let headerList: any = headers();
    // return NextResponse.json(headerList);
    let id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.user.findUnique({ where: { id: id } });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const prisma = new PrismaClient();
    const result = await prisma.user.delete({ where: { id: id } });
    return NextResponse.json({
      status: "success",
      code: 200,
      message: "User deleted successfully",
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
