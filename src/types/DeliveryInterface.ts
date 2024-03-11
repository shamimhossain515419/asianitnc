import { StaticImageData } from "next/image";

// button type interface
export interface DeliveryInterface {
  id?: number;
  title: string;
  image: StaticImageData;
  quantity: number;
}
