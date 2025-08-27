"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { User } from "lucide-react"; // user icon

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
          src="/logo1.png"
          alt="Store Logo"
          width={200}
          height={60}
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

      {/* User Dashboard Icon at Bottom */}
      <div className="mt-4">
        <Link href="/">
          <Button
            variant={pathname.startsWith("/user") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <User className="h-5 w-5 mr-2" />
            User Dashboard
          </Button>
        </Link>
      </div>
    </aside>
  );
}
