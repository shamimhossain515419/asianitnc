import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request, res: Response) => {
  try {
    const reqBody = await req.json();

    const result = await prisma.point_list.createMany({
      data: reqBody,
    });

    return NextResponse.json({
      status: "success",
      code: 200,
      message: "Point inserted successfully",
      body: reqBody,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "fail",
      code: 500,
      message: err.message,
    });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const point = await prisma.point_list.findUnique({
      where: {
        id: id,
      },
    });

    if (!point) {
      return NextResponse.json({
        status: "fail",
        code: 404,
        message: "Point not found",
      });
    }

    const result = await prisma.point_list.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      status: "success",
      code: 200,
      message: "Point inserted successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "fail",
      code: 500,
      message: err.message,
    });
  }
};
