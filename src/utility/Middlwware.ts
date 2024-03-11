import { NextResponse } from "next/server";
import { VerifyToken } from "./JwtTokenHelper";

export async function middleware(req: any, res: any) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const requestHeader: any = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    requestHeader.set("id", payload["id"]);
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (e) {
    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", "0");
    requestHeader.set("id", "0");
    return NextResponse.next({ request: { headers: requestHeader } });
  }
}
