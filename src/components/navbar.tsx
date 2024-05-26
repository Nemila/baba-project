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
    label: "Dashboard",
    role: "admin",
  },
  {
    href: "/dashboard/specialist",
    label: "Dashboard",
    role: "specialist",
  },
];

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="sticky left-0 top-0 z-50 flex h-16 items-center justify-center border-b bg-base-100">
      <div className="container navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {navLinks.map(
                (item) =>
                  (!item.role || item.role === user?.publicMetadata.role) && (
                    <li key={item.label + item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ),
              )}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" href={"/"}>
            MaliMed
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <SignedIn>
            <SignOutButton>
              <button className="btn btn-primary">Sign Out</button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="btn btn-primary">Sign In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
