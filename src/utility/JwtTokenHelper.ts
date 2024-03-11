import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email: string, id: number) {
  const ISSUER: any = process.env.JWT_ISSUER;
  const TIME: any = process.env.JWT_EXPIRATION_TIME;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const Payload = { email: email, id: id };
  let token = await new SignJWT(Payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(ISSUER)
    .setExpirationTime(TIME)
    .sign(secret);
  return token;
}

// verify token
export async function VerifyToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
