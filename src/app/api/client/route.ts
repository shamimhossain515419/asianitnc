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
    const path = `public/uploads/client/${randomFileName}`;
    await fs.writeFile(path, buffer);
    // image upload end

    const name: string = data.get("name");
    const location: string = data.get("location");
    const userID = parseInt(data.get("userID"));

    const result = await prisma.client.create({
      data: {
        name: name,
        location: location,
        image: randomFileName,
        userID: userID,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Client Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

// get.............................................................................
export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.client.findMany();
    return NextResponse.json({
      message: "Success",
      code: 200,
      body: result,
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
    const name: string = data.get("name");
    const location: string = data.get("location");

    // Fetch the client data to get the current image filename
    const client = await prisma.client.findUnique({
      where: {
        id: id,
      },
    });

    if (!client) {
      return NextResponse.json({
        message: "Client not found",
        code: 404,
      });
    }

    let imagePath = ""; // Variable to store the path of the new image
    let randomFileName = client.image; // Initialize with the current image filename

    if (file?.name) {
      // Delete the old image file
      imagePath = path.join("public/uploads/client", client.image);
      await fs.unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = path.join("public/uploads/client", randomFileName);
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    // Update the client data in the database
    const updatedClient = await prisma.client.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        location: location,
        image: randomFileName,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Client Updated Successfully",
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

    // Fetch the client data to get the image filename
    const client = await prisma.client.findUnique({
      where: {
        id: id,
      },
    });

    if (!client) {
      return NextResponse.json({
        message: "Client not found",
        code: 404,
      });
    }

    // Delete the associated image file from the filesystem
    const imagePath = path.join("public/uploads/client", client.image);
    await fs.unlink(imagePath);

    // Delete the client from the database
    await prisma.client.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Client Deleted Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
