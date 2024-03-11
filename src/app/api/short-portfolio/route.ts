import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import { unlink } from "fs/promises";
import { generateRandomFileName } from "@/utility/generateRandomFileName";

const prisma = new PrismaClient();

// post.............................................................................
export const POST = async (req: Request, res: Response) => {
  try {
    // image upload start
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    if (!file?.name) {
      return NextResponse.json({
        status: false,
        message: "Please insert image",
      });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/short_portfolio/${randomFileName}`;
    await fs.writeFile(path, buffer);

    // image upload end
    const title: string = data.get("title");
    const total: number = parseInt(data.get("total"));
    const userID = parseInt(data.get("userID"));

    // data insert
    const result = await prisma.short_portfolio.create({
      data: {
        title: title,
        total: total,
        image: randomFileName,
        userID: userID,
      },
    });
    return NextResponse.json({
      status: "success",
      code: 200,
      message: "Portfolio added successfully",
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// get.............................................................................
export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.short_portfolio.findMany();
    return NextResponse.json({
      message: "Success",
      code: 200,
      data: result,
    });
  } catch (err: any) {
    console.log(err);

    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// put.............................................................................

export const PUT = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    const title: string = data.get("title");
    const total: number = parseInt(data.get("total"));
    const userID = parseInt(data.get("userID"));

    // Fetch the short portfolio data to get the current image filename
    const shortPortfolio = await prisma.short_portfolio.findUnique({
      where: {
        id: id,
      },
    });

    if (!shortPortfolio) {
      return NextResponse.json({
        message: "Short Portfolio not found",
        code: 404,
      });
    }

    let imagePath = "";
    let randomFileName;
    if (file) {
      // Delete the old image file
      imagePath = `public/uploads/short_portfolio/${shortPortfolio.image}`;
      await unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/short_portfolio/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath;
    }

    // Update the short portfolio data in the database
    const result = await prisma.short_portfolio.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        total: total,
        image: file ? randomFileName : shortPortfolio.image,
        userID: userID,
      },
    });

    return NextResponse.json({
      status: "success",
      code: 200,
      message: "Short Portfolio Updated Successfully",
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// delete.............................................................................

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    // Fetch the short portfolio data to get the image filename
    const shortPortfolio = await prisma.short_portfolio.findUnique({
      where: {
        id: id,
      },
    });

    if (!shortPortfolio) {
      return NextResponse.json({
        message: "Short Portfolio not found",
        code: 404,
      });
    }

    // Delete the image file
    const imagePath = `public/uploads/short_portfolio/${shortPortfolio.image}`;
    await unlink(imagePath);

    // Delete the short portfolio data from the database
    await prisma.short_portfolio.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Short Portfolio and associated image deleted successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
