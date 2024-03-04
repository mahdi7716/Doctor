import React from "react";
import Image from "next/image";
import "../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function Header() {
  const Menu = [
    { id: 1, name: "صفحه اصلی ", path: "/Home" },
    { id: 1, name: "کاوش کنید ", path: "/Explore" },
    { id: 1, name: "تماس با ما ", path: "/Contact Us" },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />

        <ul className="md:flex flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>شروع کنید </Button>
    </div>
  );
}

export default Header;
