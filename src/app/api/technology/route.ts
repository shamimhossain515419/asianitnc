import { PrismaClient, Stack } from "@prisma/client";
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
      return NextResponse.json({ status: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/technology/${randomFileName}`;
    await fs.writeFile(path, buffer);

    // image upload end

    enum Stack {
      Frontend = "frontend",
      Backend = "backend",
      Graphics = "graphics",
      Cloud = "cloud",
      Others = "others",
    }
    const title = data.get("title");
    const type: Stack = data.get("type");
    const userID = parseInt(data.get("userID"));

    // insert data
    const result = await prisma.technology.create({
      data: {
        type: type,
        title: title,
        image: randomFileName,
        userID: userID,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Technology Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// get.............................................................................
export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.technology.findMany();
    return NextResponse.json({
      status: "success",
      message: "Success",
      code: 200,
      body: result,
    });
  } catch (err: any) {
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
    const type: Stack = data.get("type");
    const userID = parseInt(data.get("userID"));

    // Fetch the technology data to get the current image filename
    const technology = await prisma.technology.findUnique({
      where: {
        id: id,
      },
    });

    if (!technology) {
      return NextResponse.json({
        message: "Technology not found",
        code: 404,
      });
    }

    let imagePath = ""; // Variable to store the path of the new image
    let randomFileName;
    if (file.name) {
      // Delete the old image file
      imagePath = `public/uploads/technology/${technology.image}`;
      await unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/technology/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    // Update the technology data in the database
    const result = await prisma.technology.update({
      where: {
        id: id,
      },
      data: {
        type: type,
        title: title,
        image: file ? randomFileName : technology.image,
        userID: userID,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Technology Updated Successfully",
      code: 200,
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

    // Fetch the technology data to get the image filename
    const technology = await prisma.technology.findUnique({
      where: {
        id: id,
      },
    });

    if (!technology) {
      return NextResponse.json({
        message: "Technology not found",
        code: 404,
      });
    }

    // Delete the image file
    const imagePath = `public/uploads/technology/${technology.image}`;
    await unlink(imagePath);

    // Delete the technology data from the database
    await prisma.technology.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Technology deleted successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
