import { ClerkProvider } from "@clerk/nextjs";
import { Poppins as FontSans } from "next/font/google";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { TooltipProvider } from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";

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
      <TooltipProvider>
        <html lang="fr">
          <body
            className={cn(
              "flex min-h-screen flex-col bg-muted/90 font-sans antialiased",
              fontSans.variable,
            )}
          >
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
