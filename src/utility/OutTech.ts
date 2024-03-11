import { StaticImageData } from "next/image";
import fontend1 from "../../public/images/out tech/fontend (1).png";
import fontend2 from "../../public/images/out tech/fontend (2).png";
import fontend3 from "../../public/images/out tech/fontend (3).png";
import fontend4 from "../../public/images/out tech/fontend (4).png";
import fontend5 from "../../public/images/out tech/fontend (5).png";
import fontend6 from "../../public/images/out tech/fontend(6).png";
export interface Tech {
  name: string;
  image: StaticImageData;
}

export interface TechInterface {
  name: string;
  techs: Tech[];
}

export const OurTechData: TechInterface[] = [
  {
    name: "fontend",
    techs: [
      {
        name: "React",
        image: fontend1,
      },
      {
        name: "Value.js",
        image: fontend2,
      },
      {
        name: "Angular",
        image: fontend3,
      },
      {
        name: "Nuxt.js",
        image: fontend4,
      },
      {
        name: "JavaScript",
        image: fontend5,
      },
      {
        name: "Tailwind css",
        image: fontend6,
      },
    ],
  },
  {
    name: "Backend",
    techs: [
      {
        name: "React",
        image: fontend1,
      },
      {
        name: "Value.js",
        image: fontend2,
      },
      {
        name: "Angular",
        image: fontend3,
      },
      {
        name: "Nuxt.js",
        image: fontend4,
      },
      {
        name: "JavaScript",
        image: fontend5,
      },
      {
        name: "Tailwind css",
        image: fontend6,
      },
    ],
  },
  {
    name: "Graphics",
    techs: [
      {
        name: "React",
        image: fontend1,
      },
      {
        name: "Value.js",
        image: fontend2,
      },
      {
        name: "Angular",
        image: fontend3,
      },
      {
        name: "Nuxt.js",
        image: fontend4,
      },
      {
        name: "JavaScript",
        image: fontend5,
      },
      {
        name: "Tailwind css",
        image: fontend6,
      },
    ],
  },
  {
    name: "Cloud Platform",
    techs: [
      {
        name: "React",
        image: fontend1,
      },
      {
        name: "Value.js",
        image: fontend2,
      },
      {
        name: "Angular",
        image: fontend3,
      },
      {
        name: "Nuxt.js",
        image: fontend4,
      },
      {
        name: "JavaScript",
        image: fontend5,
      },
      {
        name: "Tailwind css",
        image: fontend6,
      },
    ],
  },
  {
    name: "Others",
    techs: [
      {
        name: "React",
        image: fontend1,
      },
      {
        name: "Value.js",
        image: fontend2,
      },
      {
        name: "Angular",
        image: fontend3,
      },
      {
        name: "Nuxt.js",
        image: fontend4,
      },
      {
        name: "JavaScript",
        image: fontend5,
      },
      {
        name: "Tailwind css",
        image: fontend6,
      },
    ],
  },
];
