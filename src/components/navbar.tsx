"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import { PanelRight, UserRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "./ui/button";

const navLinks = [
  {
    href: "/appointments",
    label: "Consultations",
  },
  {
    href: "/specialists",
    label: "Specialistes",
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
            <SignInButton>Se Connecter</SignInButton>
          </SignedOut>

          <SignedIn>
            <SignOutButton>Se Deconnecter</SignOutButton>
          </SignedIn>
        </div>

        <div className="flex items-center justify-center gap-2">
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button size={"icon"} variant={"outline"}>
                <Bell className="h-4 w-4" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="space-y-2 p-4" align="end">
              <div className="flex items-center justify-between">
                <h4>Notifications</h4>

                <Button size={"icon"}>
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
          </Popover> */}

          <Button asChild variant={"outline"} size={"icon"}>
            <Link href="/medical-details">
              <UserRound className="h-4 w-4" />
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

// const NotificationMessage = () => {
//   return (
//     <Link
//       href={"/"}
//       className="flex flex-col items-start gap-2 rounded-md  p-2 hover:border hover:bg-muted/40"
//     >
//       <Badge className="text-xs"></Badge>
//       <p className="line-clamp-2 text-xs">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
//         placeat deleniti quaerat expedita laboriosam, natus perferendis, soluta
//         voluptates nesciunt obcaecati dolorem itaque nemo. Fugit quos vitae,
//         error itaque quis neque?
//       </p>
//     </Link>
//   );
// };

export default Navbar;
