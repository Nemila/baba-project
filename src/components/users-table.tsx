"use client";
import { type User } from "@clerk/nextjs/server";
import { Loader2, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { setUserRole } from "~/lib/actions";
import { type Roles } from "~/types/globals";
import { useToast } from "./ui/use-toast";

const UsersTable = ({ users }: { users: string }) => {
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    setAllUsers(JSON.parse(users) as User[]);
  }, [users]);

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Utilisateurs</CardTitle>
        <CardDescription>Liste des derniers utilisateurs</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Utilisateur</TableHead>
              <TableHead>Type d&apos;utilisateur</TableHead>
              <TableHead className="hidden sm:table-cell">
                Nom D&apos;utilisateur
              </TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allUsers.map((item) => (
              <UserRow item={item} key={item.id} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const UserRow = ({ item }: { item: User }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRoleChange = async (userId: string, role: Roles) => {
    setIsLoading(true);

    try {
      await setUserRole(userId, role);
      toast({
        title: "Done",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">
          {item.firstName} {item.lastName}
        </div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {item.emailAddresses[0]?.emailAddress}
        </div>
      </TableCell>

      <TableCell>{(item.publicMetadata?.role as string) ?? "user"}</TableCell>

      <TableCell className="hidden capitalize sm:table-cell">
        {item.username ?? "N/A"}
      </TableCell>

      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MoreHorizontal className="h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Changer de type</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={async () => await handleRoleChange(item.id, "admin")}
            >
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () =>
                await handleRoleChange(item.id, "specialist")
              }
            >
              Spécialiste
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => await handleRoleChange(item.id, "user")}
            >
              Utilisateur
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default UsersTable;
