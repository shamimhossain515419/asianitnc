import { DeliveryInterface } from "@/types/DeliveryInterface";
import Experience from "../../public/images/delivery/delivery (1).png";
import Countries from "../../public/images/delivery/delivery (2).png";
import Projects from "../../public/images/delivery/delivery (3).png";
import Clients from "../../public/images/delivery/delivery (4).png";
export const DeliveryData: DeliveryInterface[] = [
  {
    id: 1,
    title: "Years Experience",
    image: Experience,
    quantity: 10,
  },
  {
    id: 2,
    title: "Countries",
    image: Countries,
    quantity: 20,
  },
  {
    id: 3,
    title: "Projects Complete",
    image: Projects,
    quantity: 600,
  },
  {
    id: 4,
    title: "Happy Clients",
    image: Clients,
    quantity: 800,
  },
];
