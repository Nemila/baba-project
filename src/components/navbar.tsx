"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Ellipsis, LogIn, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "./ui/button";

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
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = (v: boolean) => setIsOpen(v);

  return (
    <nav className="flex h-16 items-center justify-center border-b bg-background">
      <div className="container flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-semibold">
          Mali
          <span className="text-primary">Med</span>
        </Link>

        <div className="flex gap-2">
          <SignedIn>
            <SignOutButton>
              <Button size={"icon"} variant={"ghost"}>
                <LogOutIcon className="h-4 w-4" />
              </Button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button size={"icon"} variant={"ghost"}>
                <LogIn className="h-4 w-4" />
              </Button>
            </SignInButton>
          </SignedOut>

          <Sheet open={isOpen} onOpenChange={handleIsOpen}>
            <SheetTrigger asChild>
              <Button size={"icon"} variant={"outline"}>
                <Ellipsis className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent className="flex w-full flex-col gap-4">
              <SheetHeader>
                <SheetTitle>MaliMed</SheetTitle>
                <SheetDescription>Menu de navigation</SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Button
                    key={item.label}
                    variant={"ghost"}
                    className="w-full justify-start"
                    onClick={() => handleIsOpen(false)}
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}

                <SignedIn></SignedIn>

                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
