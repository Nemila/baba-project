import { Calendar, ExternalLink, Facebook } from "lucide-react";
import Image from "next/image";
import DiseaseCard from "~/components/disease-card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

const DiseaseDetailPage = () => {
  return (
    <div className="flex flex-1">
      <div className="container grid grid-cols-1 border-x bg-white lg:grid-cols-12">
        <div className="space-y-2 pt-4 lg:hidden">
          <h3 className="text-xl font-bold">Racourcis</h3>

          <div className="flex flex-col gap-1">
            <Button className="justify-start">
              <a href="#desc">Description de la maladie</a>
            </Button>

            <Button className="justify-start">
              <a href="#causes">Causes de la maladie</a>
            </Button>

            <Button className="justify-start">
              <a href="#transmission">Moyens de transmission</a>
            </Button>

            <Button className="justify-start">
              <a href="#prevent">Comment se proteger</a>
            </Button>
          </div>
        </div>

        <div className="col-span-8 py-6 lg:px-4">
          <h1
            id="desc"
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            Taxing Laughter: The Joke Tax Chronicles
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>

          <h2
            id="causes"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            The King&apos;s Plan
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aliquid fugit deleniti omnis fugiat voluptatem dolore? Reprehenderit
            facere earum eligendi voluptates eum veniam totam? Expedita fugit
            quibusdam sequi voluptatum perspiciatis?
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aliquid fugit deleniti omnis fugiat voluptatem dolore? Reprehenderit
            facere earum eligendi voluptates eum veniam totam? Expedita fugit
            quibusdam sequi voluptatum perspiciatis?
          </p>

          <h2
            id="transmission"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            The King&apos;s Plan
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aliquid fugit deleniti omnis fugiat voluptatem dolore? Reprehenderit
            facere earum eligendi voluptates eum veniam totam? Expedita fugit
            quibusdam sequi voluptatum perspiciatis?
          </p>

          <h2
            id="prevent"
            className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          >
            The King&apos;s Plan
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aliquid fugit deleniti omnis fugiat voluptatem dolore? Reprehenderit
            facere earum eligendi voluptates eum veniam totam? Expedita fugit
            quibusdam sequi voluptatum perspiciatis?
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            aliquid fugit deleniti omnis fugiat voluptatem dolore? Reprehenderit
            facere earum eligendi voluptates eum veniam totam? Expedita fugit
            quibusdam sequi voluptatum perspiciatis?
          </p>
        </div>

        <aside className="relative col-span-4 h-full space-y-4 border-t py-4 lg:border-l lg:border-t-0 lg:p-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Concernant l&apos;article</h3>

            <Card className="flex flex-col">
              <div className="flex items-center justify-between p-4">
                <div className="space-y-1">
                  <h3>Lamine Diamoutene</h3>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">Cardiologue</p>
                    <Badge className="rounded-lg">Auteur</Badge>
                  </div>
                </div>

                <figure className="size-16 overflow-hidden rounded-lg">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src={`https://avatarfiles.alphacoders.com/375/375590.png`}
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>

              <div className="flex items-center gap-4 border-t bg-gray-100 px-4 py-2">
                <p className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>06/15/2024</span>
                </p>

                <a
                  href="#"
                  className="ml-auto flex items-center gap-2 text-sm hover:underline"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </Card>
          </div>

          <div className="hidden flex-col space-y-2 lg:flex">
            <Separator />

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Racourcis</h3>

              <div className="flex flex-col gap-1">
                <Button className="justify-start">
                  <a href="#">Description de la maladie</a>
                </Button>

                <Button className="justify-start">
                  <a href="#">Causes de la maladie</a>
                </Button>

                <Button className="justify-start">
                  <a href="#">Moyens de transmission</a>
                </Button>

                <Button className="justify-start">
                  <a href="#">Comment se proteger</a>
                </Button>
              </div>
            </div>
          </div>
          <Separator />

          <div className="space-y-2">
            <h3 className="text-xl font-bold">D&apos;autres articles</h3>

            <div className="flex flex-col gap-4">
              <DiseaseCard />
              <DiseaseCard />
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Sources</h3>

            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-2 hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>Some random source 1</span>
              </a>

              <a href="#" className="flex items-center gap-2 hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>Some random source 2</span>
              </a>

              <a href="#" className="flex items-center gap-2 hover:underline">
                <ExternalLink className="h-4 w-4" />
                <span>Some random source 3</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DiseaseDetailPage;
