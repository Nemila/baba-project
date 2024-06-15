"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="flex h-16 w-full items-center justify-center border-b">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
