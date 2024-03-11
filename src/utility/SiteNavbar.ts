import { FC } from "react";
import { FaHome } from "react-icons/fa";

import { BiCategoryAlt } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";

interface SiteNavbarItem {
  id: number;
  name: string;
  path: string;
  Icon: FC<{ size: number }>;
}

export const SiteNavbar: SiteNavbarItem[] = [
  {
    id: 1,
    name: "dashboard",
    path: "/account",
    Icon: FaHome,
  },
  {
    id: 2,
    name: "dashboard",
    path: "/account",
    Icon: CiLogin,
  },
  {
    id: 3,
    name: "Logout",
    path: "/Logout",
    Icon: CiLogin,
  },
  // Add more items as needed
];

export default SiteNavbar;
