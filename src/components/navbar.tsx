"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import { Cog, File, PanelRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";

const navLinks = [
  {
    href: "/appointments",
    label: "Consultations",
  },
  {
    href: "/specialists",
    label: "Spécialistes",
  },
  {
    href: "/diseases",
    label: "Maladies",
  },
  {
    href: "/dashboard",
    label: "Tableau de bord",
    role: "admin",
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
          <Image src={"/logo.svg"} alt="" width={128} height={128} />
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
            <SignInButton>Se Connecter</SignInButton>
          </SignedOut>

          <SignedIn>
            <SignOutButton>Se Déconnecter</SignOutButton>
          </SignedIn>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button asChild variant={"outline"} size={"icon"}>
            <Link href="/medical-details/update">
              <Cog className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant={"outline"} size={"icon"}>
            <Link href={`/medical-details/${user?.id}`}>
              <File className="h-4 w-4" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={"icon"}
                variant={"outline"}
                className="flex md:hidden"
              >
                <PanelRight className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {navLinks.map(
                  (navLink, index) =>
                    (!navLink.role || navLink.role === role) && (
                      <Link
                        href={navLink.href}
                        key={`${navLink.label}-${index}`}
                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                      >
                        {navLink.label}
                      </Link>
                    ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
