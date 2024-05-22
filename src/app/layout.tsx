import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Poppins as FontSans } from "next/font/google";
import Navbar from "~/components/navbar";
import { Toaster } from "~/components/ui/toaster";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
            "min-h-screen bg-background font-sans text-gray-800 antialiased",
            fontSans.variable,
          )}
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <footer className="border-t p-6 text-center text-xs">
            <p>MaliMed All rights reserved | 2024 - 2025</p>
          </footer>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
