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
            La Méningite
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            La méningite est une infection des méninges, les membranes entourant
            le cerveau et la moelle épinière. Elle peut être causée par des
            virus, des bactéries ou des champignons.
          </p>

          <h2
            id="causes"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Causes et origine
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Les méningocoques (Neisseria meningitidis) sont parmi les
            principales bactéries responsables de méningites aiguës.
            D&apos;autres agents pathogènes incluent Haemophilus influenzae et
            Streptococcus pneumoniae. Les infections bactériennes surviennent
            souvent après une infection locale qui permet aux bactéries de
            franchir la barrière hémato-méningée.
          </p>

          <h2
            id="transmission"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Moyens de transmission et symptômes
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Les bactéries responsables de la méningite se transmettent
            principalement par gouttelettes respiratoires et sécrétions
            pharyngées. Le contact proche et prolongé avec une personne infectée
            est nécessaire pour la transmission.
          </p>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Les symptômes de la méningite varient selon l&apos;âge. Chez les
            nourrissons et les jeunes enfants, ils incluent souvent une fièvre
            soudaine, des convulsions, un bombement de la fontanelle, et une
            difficulté à s&apos;alimenter. Chez les enfants plus âgés et les
            adultes, la méningite se manifeste par une fièvre, des maux de tête
            violents, des vomissements, une raideur de la nuque, une léthargie
            et parfois un coma. Des taches hémorragiques sous la peau (purpura)
            peuvent signaler une gravité accrue.
          </p>

          <h2
            id="prevent"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            Prévention et mesures de protection
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            La meilleure prévention contre la méningite est la vaccination. En
            France, la vaccination contre le méningocoque C est obligatoire pour
            les nourrissons nés après janvier 2018. La vaccination contre
            d&apos;sautres sérogroupes comme A, W, Y est également recommandée.
            Un traitement préventif par antibiotiques peut être nécessaire pour
            les contacts proches en cas d&apos;infection.
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
                href="corona"
                description="La COVID-19 est une infection respiratoire provoquée par le coronavirus SARS-CoV-2, apparu en Chine à partir de chauve-souris infectées. Les symptômes incluent fatigue, fièvre, toux, difficultés respiratoires, ainsi que des symptômes non spécifiques comme courbatures, mal de gorge, et parfois des troubles gastro-intestinaux. Les formes sévères peuvent entraîner des complications respiratoires graves nécessitant une hospitalisation, voire une assistance respiratoire."
                danger="Tres Dangereux"
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Sources</h3>

            <div className="flex flex-col items-start gap-2">
              <Button variant={"link"} className="h-fit p-0" asChild>
                <a href="https://www.revues.ml/index.php/msp/article/download/2645/1827#:~:text=En%202020%20le%20Mali%20a,A%20en%20Afrique%20%5B3%5D">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Revues.Ml
                </a>
              </Button>

              <Button variant={"link"} className="h-fit p-0" asChild>
                <a href="https://www.pasteur.fr/fr/centre-medical/fiches-maladies/meningites-meningocoques">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Pasteur.Fr
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
