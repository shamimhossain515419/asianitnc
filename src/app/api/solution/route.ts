import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

import fs from "fs/promises";
import { unlink } from "fs/promises";
import { generateRandomFileName } from "@/utility/generateRandomFileName";

const prisma = new PrismaClient();

// post.............................................................................
export const POST = async (req: Request, res: Response) => {
  try {
    // image upload  start
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    if (!file?.name) {
      return NextResponse.json({ status: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/solution/${randomFileName}`;
    await fs.writeFile(path, buffer);

    // image upload end
    const title: string = data.get("title");
    const userID: number = parseInt(data.get("userID"));

    const result = await prisma.solution.create({
      data: {
        title: title,
        userID,
        image: `${randomFileName}`,
      },
    });
    return NextResponse.json({
      message: "Solution Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// get.............................................................................
export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.solution.findMany();
    return NextResponse.json({
      message: "Success",
      code: 200,
      body: result,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    const title: string = data.get("title");
    const userID: number = parseInt(data.get("userID"));

    // Fetch the solution data to get the current image filename
    const solution = await prisma.solution.findUnique({
      where: {
        id: id,
      },
    });

    if (!solution) {
      return NextResponse.json({
        message: "Solution not found",
        code: 404,
      });
    }

    let imagePath = ""; // Variable to store the path of the new image

    let randomFileName;
    if (file?.name) {
      // Delete the old image file
      imagePath = `public/uploads/solution/${solution.image}`;
      await unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/solution/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    // Update the solution data in the database
    const result = await prisma.solution.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        userID: userID,
        image: file ? randomFileName : solution.image, // If new image uploaded, use new filename, else use existing filename
      },
    });

    return NextResponse.json({
      message: "Solution Updated Successfully",
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

    // Fetch the solution data to get the image filename
    const solution = await prisma.solution.findUnique({
      where: {
        id: id,
      },
    });

    if (!solution) {
      return NextResponse.json({
        message: "Solution not found",
        code: 404,
      });
    }

    // Delete the image file
    const imagePath = `public/uploads/solution/${solution.image}`;
    await unlink(imagePath);

    // Delete the solution data from the database
    await prisma.solution.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Solution deleted successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
