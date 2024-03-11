import { generateRandomFileName } from "@/utility/generateRandomFileName";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import { unlink } from "fs/promises";
import path from "path";

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
    const path = `public/uploads/product/${randomFileName}`;
    await fs.writeFile(path, buffer);

    // image upload end
    const title: string = data.get("title");

    const userID = parseInt(data.get("userID"));

    const result = await prisma.product.create({
      data: {
        title: title,
        image: randomFileName,
        userID: userID,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Product Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// get.............................................................................
export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.product.findMany({
      include: {
        Point_list: true,
      },
    });
    return NextResponse.json({
      message: "Success",
      code: 200,
      body: result,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// PUT ..................................................................................
export const PUT = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    const title: string = data.get("title");
    const userID = parseInt(data.get("userID"));

    // Fetch the product data to get the current image filename
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!product) {
      return NextResponse.json({
        status: "fail",
        message: "Product not found",
        code: 404,
      });
    }

    let imagePath; // Variable to store the path of the new image
    let randomFileName = product.image; // Initialize with the current image filename

    if (file?.name) {
      // Delete the old image file
      imagePath = `public/uploads/product/${product.image}`;
      await fs.unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = path.join("public/uploads/product", randomFileName);
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    // Update the product data in the database
    const updatedProduct = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        image: randomFileName,
        userID: userID,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Product Updated Successfully",
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

    // Fetch the product data to get the image filename
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!product) {
      return NextResponse.json({
        message: "Product not found",
        code: 404,
      });
    }

    // Delete the associated image file from the filesystem
    const imagePath = path.join("public/uploads/product", product.image);
    await fs.unlink(imagePath);

    // Delete the product from the database
    await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Product Deleted Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
