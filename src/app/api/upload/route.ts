import { generateRandomFileName } from "@/utility/generateRandomFileName";
import fs from "fs/promises";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: any) => {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const randomFileName = generateRandomFileName(file.name);
  const path = `public/uploads/${randomFileName}`;

  await fs.writeFile(path, buffer);

  return NextResponse.json({ success: true, fileName: randomFileName });
};
