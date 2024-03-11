import { generateRandomFileName } from "@/utility/generateRandomFileName";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import { unlink } from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

//  POST ..........................................................................

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
    const path = `public/uploads/team/${randomFileName}`;
    await fs.writeFile(path, buffer);

    // image upload end
    const name: string = data.get("name");
    const designations: string = data.get("designations");
    const userID = parseInt(data.get("userID"));

    const result = await prisma.team.create({
      data: {
        name,
        designations,
        image: randomFileName,
        userID: userID,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "Team member Added Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
//  GET ..........................................................................

export const GET = async (req: Request, res: Response) => {
  try {
    const result = await prisma.team.findMany();
    return NextResponse.json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err: any) {
    return NextResponse.json({
      status: "fail",
      message: err.message,
      code: 500,
    });
  }
};

//  PUT ...............................................................................

export const PUT = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const data: any = await req.formData();
    const file: File | null = data.get("image") as unknown as File;
    const name: string = data.get("name");
    const designations: string = data.get("designations");
    const userID = parseInt(data.get("userID"));

    // Fetch the team member data to get the current image filename
    const teamMember = await prisma.team.findUnique({
      where: {
        id: id,
      },
    });

    if (!teamMember) {
      return NextResponse.json({
        message: "Team member not found",
        code: 404,
      });
    }

    let randomFileName = teamMember.image;

    if (file?.name) {
      // Delete the old image file
      const imagePath = path.join("public/uploads/team", teamMember.image);
      await unlink(imagePath);

      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = path.join("public/uploads/team", randomFileName);
      await fs.writeFile(newPath, buffer);
    }

    // Update the team member data in the database
    const updatedTeamMember = await prisma.team.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        designations: designations,
        image: randomFileName,
        userID: userID,
      },
    });

    return NextResponse.json({
      message: "Team Member Updated Successfully",
      code: 200,
      data: updatedTeamMember,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};

//  DELETE .......................................................................................

export const DELETE = async (req: Request, res: Response) => {
  try {
    const { searchParams }: any = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    // Fetch the team member data to get the image filename
    const teamMember = await prisma.team.findUnique({
      where: {
        id: id,
      },
    });

    if (!teamMember) {
      return NextResponse.json({
        message: "Team member not found",
        code: 404,
      });
    }

    // Delete the associated image file from the filesystem
    const imagePath = path.join("public/uploads/team", teamMember.image);
    await fs.unlink(imagePath);

    // Delete the team member from the database
    await prisma.team.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Team Member Deleted Successfully",
      code: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message, code: 500 });
  }
};
