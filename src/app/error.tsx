"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="container flex-1 space-y-4 p-4">
      <div>
        <h2 className="text-4xl font-bold">Erreur Inconnue</h2>
        <p className="text-lg">
          Un probleme est survenu, veuillez reessayer ou contacter les
          developpeurs.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Accueil</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
