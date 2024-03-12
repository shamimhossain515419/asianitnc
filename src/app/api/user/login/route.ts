import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { CreateToken } from "@/utility/JwtTokenHelper";

export async function POST(req: Request, res: Response) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();
    const result: any = await prisma.user.findUnique({
      where: reqBody,
    });

    if (result.length === 0) {
      return NextResponse.json({ status: "fail", data: result });
    } else {
      let token = await CreateToken(result["email"], result["id"]);

      let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);

      const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;

      return NextResponse.json(
        {
          status: "success",
          id: result.id,
          name: result.name,
          role: result.role,
          email: result.email,
          data: token,
        },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function GET(req: Request, res: Response) {
  let expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const response = NextResponse.redirect(new URL("/", req.url));
  response.cookies.set("token", "", { expires: expireDuration });

  return response;
}
