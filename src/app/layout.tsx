import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";

import { Inter as FontSans } from "next/font/google";

import Link from "next/link";
import { cn } from "~/lib/utils";

import "@stream-io/video-react-sdk/dist/css/styles.css";

import { StreamVideoProvider } from "~/providers/stream-video-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "MaliMed | Application Web Medical Malien",
  description: "Votre sante prime sur tout et on vous aide a la preserver",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <StreamVideoProvider>
            <div className="container">
              <nav className="space-x-4 p-4">
                <Link href="/">Home</Link>
                <Link href="/appointments/view">Appointments</Link>
                <Link href="/specialists">Specialists</Link>
                <Link href="/dashboard/user">User Dashboard</Link>
                <Link href="/dashboard/specialist">Specialist Dashboard</Link>
                <Link href="/dashboard/admin">Admin Dashboard</Link>

                <SignedIn>
                  <SignOutButton />
                  <UserButton />
                </SignedIn>

                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </nav>

              {children}
            </div>

            <Toaster />
          </StreamVideoProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
