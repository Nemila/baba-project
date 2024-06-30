import { ExternalLink } from "lucide-react";
import DiseaseCard from "~/components/disease-card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

const DiseaseDetailPage = () => {
  return (
    <div className="flex flex-1">
      <div className="container grid grid-cols-1 border-x bg-white lg:grid-cols-12">
        <div className="space-y-2 pt-4 lg:hidden">
          <h3 className="text-xl font-bold">Racourcis</h3>

          <div className="flex flex-col gap-1">
            <Button className="justify-start" asChild>
              <a href="#desc">Description de la maladie</a>
            </Button>

            <Button className="justify-start" asChild>
              <a href="#causes">Causes de la maladie</a>
            </Button>

            <Button className="justify-start" asChild>
              <a href="#transmission">Moyens de transmission</a>
            </Button>

            <Button className="justify-start" asChild>
              <a href="#prevent">Comment se proteger</a>
            </Button>
          </div>
        </div>

        <div className="col-span-8 py-6 lg:px-4">
          <h1
            id="desc"
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            COVID-19
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            La COVID-19 est une infection respiratoire provoquée par le
            coronavirus SARS-CoV-2, apparu en Chine à partir de chauve-souris
            infectées. Les symptômes incluent fatigue, fièvre, toux, difficultés
            respiratoires, ainsi que des symptômes non spécifiques comme
            courbatures, mal de gorge, et parfois des troubles
            gastro-intestinaux. Les formes sévères peuvent entraîner des
            complications respiratoires graves nécessitant une hospitalisation,
            voire une assistance respiratoire.
          </p>

          <h2
            id="causes"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Causes et origine
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Le virus SARS-CoV-2 est issu probablement d&apos;une transmission
            zoonotique, passant des animaux aux humains. Il aurait émergé à
            Wuhan, en Chine, associé initialement à un marché d&apos;animaux
            vivants. Il se distingue des virus précédents (comme le SRAS et le
            MERS) par sa capacité à se propager largement, même par des
            personnes asymptomatiques.
          </p>

          <h2
            id="transmission"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Moyens de transmission
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            La COVID-19 se transmet principalement par l&apos;air via des
            aérosols contenant le virus, particulièrement dans des espaces clos
            et mal ventilés. La contamination peut aussi se faire par contact
            avec des surfaces contaminées où le virus peut survivre pendant
            plusieurs heures à plusieurs jours. Les animaux domestiques ne
            semblent pas jouer un rôle significatif dans la transmission.
          </p>

          <h2
            id="prevent"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Prévention et mesures de protection
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Pour éviter la propagation de la COVID-19, il est recommandé de
            porter un masque (de type chirurgical ou FFP2), de pratiquer la
            distanciation physique, de se laver régulièrement les mains avec du
            savon ou d&apos;utiliser du gel hydro-alcoolique. Éviter les lieux
            clos peu ventilés et les rassemblements est également conseillé. Les
            vaccins contre la COVID-19 jouent un rôle crucial dans la protection
            individuelle et collective contre la maladie.
          </p>
        </div>

        <aside className="relative col-span-4 h-full space-y-4 border-t py-4 lg:border-l lg:border-t-0 lg:p-4">
          <div className="hidden flex-col space-y-2 lg:flex">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Racourcis</h3>

              <div className="flex flex-col gap-1">
                <Button className="justify-start" asChild>
                  <a href="#desc">Description de la maladie</a>
                </Button>

                <Button className="justify-start" asChild>
                  <a href="#causes">Causes de la maladie</a>
                </Button>

                <Button className="justify-start" asChild>
                  <a href="#transmission">Moyens de transmission</a>
                </Button>

                <Button className="justify-start" asChild>
                  <a href="#prevent">Comment se proteger</a>
                </Button>
              </div>
            </div>
          </div>
          <Separator />

          <div className="space-y-2">
            <h3 className="text-xl font-bold">D&apos;autres articles</h3>

            <div className="flex flex-col gap-4">
              <DiseaseCard
                href="meningite"
                description="La méningite est une infection des méninges, les membranes entourant le cerveau et la moelle épinière. Elle peut être causée par des virus, des bactéries ou des champignons."
                danger="Tres Dangereux"
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Sources</h3>

            <div className="flex flex-col items-start gap-2">
              <Button variant={"link"} className="h-fit p-0" asChild>
                <a href="https://www.vidal.fr/maladies/voies-respiratoires/coronavirus-covid-19/vaccins.html">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Vidal.Fr
                </a>
              </Button>

              <Button variant={"link"} className="h-fit p-0" asChild>
                <a href="https://fr.m.wikipedia.org/wiki/Pandémie_de_Covid-19_au_Mali">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Wikipedia.Org
                </a>
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DiseaseDetailPage;
