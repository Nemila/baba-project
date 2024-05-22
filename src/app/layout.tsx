import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import { Toaster } from "~/components/ui/toaster";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

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
          <div className="container">
            <nav className="space-x-4 p-4">
              <Link href="/">Home</Link>
              <Link href="/appointments/view">Appointments</Link>
              <Link href="/specialists">Specialists</Link>
              <Link href="/dashboard/user">User Dashboard</Link>
              <Link href="/dashboard/specialist">Specialist Dashboard</Link>
              <Link href="/dashboard/admin">Admin Dashboard</Link>
              <Link href="/diseases">Diseases</Link>

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
        </body>
      </html>
    </ClerkProvider>
  );
}
