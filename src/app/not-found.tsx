import Link from "next/link";
import { Button } from "~/components/ui/button";

const NotFound = () => {
  return (
    <div className="container flex-1 space-y-4 p-4">
      <div>
        <h2 className="text-4xl font-bold">Erreur 404</h2>
        <p className="text-lg">La page que vous cherchez est introuvable</p>
      </div>
      <Button asChild>
        <Link href="/">Accueil</Link>
      </Button>
    </div>
  );
};

export default NotFound;
