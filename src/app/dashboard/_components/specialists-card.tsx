"use client";
import type { User } from "@clerk/nextjs/server";
import { Loader2, Plus, UserRound } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { addSpecialist } from "~/lib/actions";
import { type Roles } from "~/types/globals";

const SpecialistsCard = ({ users }: { users: string }) => {
  const { toast } = useToast();
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const [userListModalOpen, setUserListModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    setAllUsers(JSON.parse(users) as User[]);
  }, [users]);

  const handleSubmit = async () => {
    setIsLoading(true);

    const user = allUsers.find(
      (item) => item.emailAddresses[0]?.emailAddress === selectedUser,
    );
    if (!user) return;
    const data = { userId: user.id, speciality, experience };

    try {
      await addSpecialist(data);
      toast({
        title: "Specialiste Ajoute",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Un probleme est survenu",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Spécialistes Totaux</CardDescription>
        <CardTitle className="text-4xl">200</CardTitle>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button className="w-full" variant={"outline"} asChild>
          <Link href={`/specialists`}>Voir Tout</Link>
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="shrink-0" size={"icon"}>
              <Plus className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ajouter un docteur</DialogTitle>
              <DialogDescription>
                Le docteur doit avoir un compte afin d&apos;etre ajouté.
              </DialogDescription>

              <div className="flex flex-col gap-2">
                <Dialog
                  open={userListModalOpen}
                  defaultOpen={false}
                  onOpenChange={(value) => setUserListModalOpen(value)}
                >
                  <DialogTrigger asChild>
                    <Button variant={"outline"} className="justify-start">
                      <UserRound className="mr-2 h-4 w-4" />
                      {selectedUser.trim() ? selectedUser : "Utilisateur"}
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <Command>
                      <CommandInput placeholder="Type a command or search..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                          {allUsers.map(
                            (item) =>
                              (item.publicMetadata.role as Roles) ===
                                "specialist" && (
                                <CommandItem
                                  key={item.id}
                                  value={item.emailAddresses[0]?.emailAddress}
                                  onSelect={(value) => {
                                    setSelectedUser(value);
                                    setUserListModalOpen(false);
                                  }}
                                >
                                  {item.emailAddresses[0]?.emailAddress}
                                </CommandItem>
                              ),
                          )}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </DialogContent>
                </Dialog>

                <Input
                  placeholder="Specialite"
                  value={speciality}
                  onChange={(e) => setSpeciality(e.currentTarget.value)}
                />

                <Input
                  type="number"
                  placeholder="Experience"
                  value={experience}
                  onChange={(e) => setExperience(Number(e.currentTarget.value))}
                />

                <Button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Ajouter
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default SpecialistsCard;
