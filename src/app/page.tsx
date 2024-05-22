import { currentUser } from "@clerk/nextjs/server";
import { Info, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpecialistCard from "~/components/specialist-card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { db } from "~/server/db";

export default async function HomePage() {
  const user = await currentUser();
  const specialists = await db.specialist.findMany({
    take: 4,
  });

  return (
    <main className="flex flex-col gap-8 pb-8">
      <Link
        href={"/"}
        className="sticky left-0 top-0 z-20 flex h-8 border-b bg-white shadow-md"
      >
        <div className="flex h-full w-8 shrink-0 items-center justify-center bg-primary text-white">
          <Info className="h-4 w-4 shrink-0" />
        </div>

        <div className="p-2">
          <p className="line-clamp-1 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam
            facilis cumque iusto, dolore recusandae, corrupti sunt consectetur
            exercitationem, ex dolorum earum officia suscipit soluta. Sequi
            aliquam assumenda provident maxime.
          </p>
        </div>
      </Link>

      <header className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
        <Image
          width={500}
          height={500}
          alt=""
          src={"/medbro.svg"}
          className="w-full"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold capitalize">
            Welcome {user?.username} !
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            dolor adipisci.
          </p>
        </div>

        <Button>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </header>

      <Separator />

      <div className="container flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <header className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Latest Diseases</h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              iste, maxime incidunt.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4">
            <DiseaseCard />
            <DiseaseCard />
            <DiseaseCard />
            <DiseaseCard />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <header className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Specialists</h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              iste, maxime incidunt.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4">
            {[...specialists, ...specialists, ...specialists].map(
              (item, index) => (
                <SpecialistCard data={item} key={item.id + index} />
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

const DiseaseCard = () => {
  return (
    <div className="flex flex-col items-start gap-2 rounded-md border p-4 shadow-sm">
      <Badge variant={"destructive"}>Level 3</Badge>
      <h6>Coronavirus disease (COVID-19)</h6>
      <p className="line-clamp-2 text-xs">
        Most people infected with the virus will experience mild to moderate
        respiratory illness and recover without requiring special treatment.
        However, some will become seriously ill and require medical attention.
        Older people and those with underlying medical conditions like
        cardiovascular disease, diabetes, chronic respiratory disease, or cancer
        are more likely to develop serious illness. Anyone can get sick with
        COVID-19 and become seriously ill or die at any age.{" "}
      </p>
      <Button variant={"link"} className="h-fit p-0" asChild>
        <Link href={"/"}>Read More</Link>
      </Button>
    </div>
  );
};
