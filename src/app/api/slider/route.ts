import { generateRandomFileName } from "@/utility/generateRandomFileName";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fs from "fs/promises";

const prisma = new PrismaClient();

export const POST = async (req: Request, res: Response) => {
  try {
    // upload image start
    const data: any = await req.formData();
    const file: File | null = data.get("photo") as unknown as File;
    if (!file) {
      return NextResponse.json({ success: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/slider/${randomFileName}`;
    await fs.writeFile(path, buffer);
    // upload image end

    // data insert
    const userID = parseInt(data.get("userID"));
    const result = await prisma.slider.create({
      data: {
        photo: randomFileName,
        userID,
      },
    });
    return NextResponse.json({
      message: "Slider Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.slider.findMany();
    return NextResponse.json({ message: "success", code: 200, body: result });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const slider = await prisma.slider.findUnique({
      where: {
        id: id,
      },
    });

    if (!slider) {
      return NextResponse.json({
        message: "Slider not found",
        code: 404,
      });
    }
    // Delete the image file
    const imagePath = `public/uploads/slider/${slider.photo}`;
    await fs.unlink(imagePath);

    await prisma.slider.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Slider deleted successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
