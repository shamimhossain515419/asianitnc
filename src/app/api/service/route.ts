import { generateRandomFileName } from "@/utility/generateRandomFileName";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import { unlink } from "fs/promises";

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
    const path = `public/uploads/services/${randomFileName}`;
    await fs.writeFile(path, buffer);

    // image upload end
    const title: string = data.get("title");
    const description: string = data.get("description");
    const link = data.get("link");
    const userID = parseInt(data.get("userID"));

    const result = await prisma.service.create({
      data: {
        title: title,
        description: description,
        link: link,
        image: randomFileName,
        userID: userID,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Service Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// get.............................................................................
export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.service.findMany();
    return NextResponse.json({
      message: "Success",
      code: 200,
      data: result,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// put..........................................................................................

export const PUT = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    const title: string = data.get("title");
    const description: string = data.get("description");
    const link = data.get("link");
    const userID = parseInt(data.get("userID"));

    // Fetch the service data to get the current image filename
    const service = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });

    if (!service) {
      return NextResponse.json({
        message: "Service not found",
        code: 404,
      });
    }

    let imagePath = ""; // Variable to store the path of the new image
    let randomFileName;
    if (file?.name) {
      // Delete the old image file
      imagePath = `public/uploads/services/${service.image}`;
      await unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/services/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    // Update the service data in the database
    const result = await prisma.service.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        link: link,
        image: file ? randomFileName : service.image,
        userID: userID,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Service Updated Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// delete ............................................................................................

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    // Fetch the service data to get the image filename
    const service = await prisma.service.findUnique({
      where: {
        id: id,
      },
    });

    if (!service) {
      return NextResponse.json({
        message: "Service not found",
        code: 404,
      });
    }

    // Delete the image file
    const imagePath = `public/uploads/services/${service.image}`;
    await unlink(imagePath);

    // Delete the service data from the database
    await prisma.service.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Service and associated image deleted successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
