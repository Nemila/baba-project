"use client";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

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
  return (
    <div className="flex items-center justify-center p-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MaliMed
        </Link>
        <div className="flex items-center justify-center gap-4 text-sm">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.href} key={`${navLink.label}-${index}`}>
              {navLink.label}
            </Link>
          ))}
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
