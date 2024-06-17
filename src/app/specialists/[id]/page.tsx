import {
  ArrowDownWideNarrow,
  Calendar,
  Clock,
  Hospital,
  Send,
  Star,
  ThumbsDown,
  ThumbsUp,
  TriangleAlert,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DatePicker } from "~/components/date-picker";
import DiseaseCard from "~/components/disease-card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";

const SpecialistDetails = async () => {
  return (
    <div className="flex flex-1">
      <div className="container grid grid-cols-12 pb-4 lg:gap-4">
        <div className="col-span-12 flex flex-col gap-4 pt-4 lg:col-span-8">
          <div className="overflow-hidden rounded-md border bg-white">
            <figure className="h-56 w-full overflow-hidden">
              <Image
                alt=""
                src={`https://images3.alphacoders.com/132/1322308.jpeg`}
                width={99999}
                height={99999}
                className="h-full w-full object-cover object-center"
              />
            </figure>

            <div className="flex flex-col gap-4 p-4">
              <div className="flex gap-4">
                <figure className="-mt-24 size-36 shrink-0 overflow-hidden rounded-full border-4 border-white">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src={`https://avatarfiles.alphacoders.com/375/375590.png`}
                    className="h-full w-full object-cover"
                  />
                </figure>

                <div className="ml-auto flex flex-col gap-2 md:flex-row">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Calendar className="mr-2 h-4 w-4" />
                        Rencontrer
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Organiser un rendez-vous</DialogTitle>
                      </DialogHeader>

                      <ReservationForm />
                    </DialogContent>
                  </Dialog>

                  <Button>
                    Noter <Star className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Lamine Diamoutene</h3>
                  <p>Co-chair, Bill & Melinda Gates Foundation</p>
                  <Badge>Featured</Badge>
                </div>

                <div className="flex flex-col items-center gap-2 md:flex-row">
                  <p className="text-sm">Seattle, Washington, États-Unis</p>

                  <span className="hidden md:block">&bull;</span>

                  <Button variant={"link"} className="h-fit p-0">
                    Voir les coordonnees
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 rounded-md border bg-white p-4">
            <h3 className="text-xl font-bold">Infos</h3>

            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              ab incidunt! Iure temporibus in velit dolore tempora asperiores
              libero consequatur, beatae impedit iusto possimus. Minus quam est
              cupiditate eum reiciendis.
            </p>
          </div>

          <div className="space-y-2 rounded-md border bg-white p-4">
            <h3 className="text-xl font-bold">Articles publies</h3>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <DiseaseCard />
              <DiseaseCard />
              <DiseaseCard />
              <DiseaseCard />
              <DiseaseCard />
              <DiseaseCard />
            </div>
          </div>

          <div className="space-y-2 rounded-md border bg-white p-4">
            <h3 className="text-xl font-bold">Commentaires</h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">109 Commentaires</h3>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"ghost"}>
                        <ArrowDownWideNarrow className="mr-2 h-6 w-6" />
                        Ordre
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        Par date de publication
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Meilleurs commentaires
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex gap-4">
                  <Avatar className="hidden size-12 lg:flex">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-1 flex-col gap-2">
                    <Textarea placeholder="Ecrivez votre commentaire" />
                    <Button>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-4">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>

        <article className="sticky left-0 top-0 col-span-12 h-fit pt-4 lg:col-span-4">
          <div className="flex flex-col rounded-md border bg-white">
            <h3 className="px-4 pt-4 text-xl font-bold">
              Autres profils similaires
            </h3>

            <div>
              <SimilarSpecialist />
              <Separator />
              <SimilarSpecialist />
              <Separator />
              <SimilarSpecialist />
              <Separator />
              <SimilarSpecialist />
              <Separator />
              <SimilarSpecialist />
              <Separator />
            </div>

            <Button variant={"ghost"} className="rounded-none">
              Voir Plus
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div className="flex gap-4">
      <Avatar className="hidden size-12 lg:flex">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-1">
        <h3 className="font-bold">Lamine Diamoutene</h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          exercitationem animi deserunt quod. Enim voluptates in labore
          pariatur? Quisquam corporis modi a minima, odio obcaecati. Ullam natus
          sapiente quas officia.
        </p>

        <div className="flex">
          <Button variant={"ghost"}>
            <ThumbsUp className="mr-2 h-5 w-5" />
            <span>0</span>
          </Button>

          <Button variant={"ghost"}>
            <ThumbsDown className="mr-2 h-5 w-5" />
            <span>0</span>
          </Button>

          <Button variant={"ghost"}>
            <TriangleAlert className="mr-2 h-5 w-5" />
            Signaler
          </Button>
        </div>
      </div>
    </div>
  );
};

const ReservationForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="flex items-center gap-2">
          <Hospital className="h-4 w-4" />
          <span>Seattle, Washington, États-Unis</span>
        </p>

        <p className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Ouvert de 10h a 20h</span>
        </p>

        <p className="flex items-center gap-2">
          <UserRound className="h-4 w-4" />
          <span>Lamine Diamoutene</span>
        </p>
      </div>

      <Label className="flex flex-col gap-2">
        <span>Date de rendez-vous</span>
        <DatePicker />
      </Label>

      <Button>Valider</Button>
    </form>
  );
};

const SimilarSpecialist = () => {
  return (
    <Link href={`/specialists/1`} className="flex gap-4 p-4">
      <figure className="size-16 shrink-0 overflow-hidden rounded-full border-4 border-white">
        <Image
          alt=""
          width={500}
          height={500}
          src={`https://avatarfiles.alphacoders.com/375/375590.png`}
          className="h-full w-full object-cover"
        />
      </figure>

      <div>
        <h3 className="font-medium">Lamine Diamoutene</h3>
        <p className="line-clamp-2 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quidem
          qui, inventore officia ab earum dicta quisquam illum accusantium dolor
          delectus. Cumque quam, provident consectetur nihil laudantium quaerat
          quia accusamus!
        </p>
      </div>
    </Link>
  );
};

export default SpecialistDetails;
