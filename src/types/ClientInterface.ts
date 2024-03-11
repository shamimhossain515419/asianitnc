import { StaticImageData } from "next/image";
export interface ClientInterface {
  image: StaticImageData;
}

export interface ClientDataInterface {
  id: number;
  name: string;
  location: string;
  image: StaticImageData;
  userID: string;
  createdAt: Date;
  updatedAt: Date;
}
