"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/user" },
    { name: "Orders", path: "/admin/order" },
    { name: "Contacts", path: "/admin/contact" },
    { name: "Settings", path: "/admin/setting" },
  ];

  const pathname = usePathname(); // Get current route

  return (
    <aside className="w-64 bg-white shadow-md p-6 h-screen flex flex-col">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <Image
          src="/logo1.png" // replace with your logo path
          alt="Store Logo"
          width={150}
          height={40}
          className="mr-2"
        />
      </div>

      {/* Menu */}
      <nav className="space-y-4 flex-1">
        {menus.map((item, i) => {
          const isActive = pathname === item.path;

          return (
            <Link key={i} href={item.path}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className="w-full justify-start"
              >
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
