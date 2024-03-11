import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request, res: Response) => {
  try {
    const reqBody = await req.json();

    const name: string = reqBody.name;
    const email: string = reqBody.email;
    const password: string = reqBody.password;
    const role: number = parseInt(reqBody.role);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });

    return NextResponse.json({
      status: "success",
      code: 200,
      message: " Add user successfully",
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "success", code: 200 });
};
