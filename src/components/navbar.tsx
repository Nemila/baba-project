"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import { Bell, CheckCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const navLinks = [
  {
    href: "/appointments/view",
    label: "Appointments",
  },
  {
    href: "/specialists",
    label: "Specialists",
  },
  {
    href: "/diseases",
    label: "Diseases",
  },
  {
    href: "/dashboard/admin",
    label: "Admin",
    role: "admin",
  },
  {
    href: "/dashboard/specialist",
    label: "Specialist",
    role: "specialist",
  },
];

const Navbar = () => {
  const { user } = useUser();
  const [role, setRole] = useState(user?.publicMetadata?.role ?? "");

  useEffect(() => {
    setRole(user?.publicMetadata?.role ?? "");
  }, [user?.publicMetadata?.role]);

  return (
    <div className="flex h-16 w-full items-center justify-center border-b bg-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MaliMed
        </Link>

        <div className="hidden items-center justify-center gap-4 text-sm md:flex">
          {navLinks.map(
            (navLink, index) =>
              (!navLink.role || navLink.role === role) && (
                <Link href={navLink.href} key={`${navLink.label}-${index}`}>
                  {navLink.label}
                </Link>
              ),
          )}

          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <SignOutButton />
          </SignedIn>

          <Popover>
            <PopoverTrigger asChild>
              <Button size={"icon"}>
                <Bell className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-2 p-4" align="end">
              <div className="flex items-center justify-between">
                <h4>Notifications</h4>

                <Button size={"icon"} variant={"outline"}>
                  <CheckCheck className="h-4 w-4" />
                </Button>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <NotificationMessage />
                <NotificationMessage />
                <NotificationMessage />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

const NotificationMessage = () => {
  return (
    <Link
      href={"/"}
      className="flex flex-col items-start gap-2 rounded-md border p-2 hover:bg-muted"
    >
      <Badge className="text-xs" variant={"destructive"}></Badge>
      <p className="line-clamp-2 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        placeat deleniti quaerat expedita laboriosam, natus perferendis, soluta
        voluptates nesciunt obcaecati dolorem itaque nemo. Fugit quos vitae,
        error itaque quis neque?
      </p>
    </Link>
  );
};

export default Navbar;
