"use client";
import { type User } from "@clerk/nextjs/server";
import { MoreHorizontal } from "lucide-react";
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
              <TableHead className="hidden sm:table-cell">Role</TableHead>
              <TableHead className="hidden sm:table-cell">
                Nom Complet
              </TableHead>
              <TableHead className="hidden sm:table-cell">
                Numero de telephone
              </TableHead>
              <TableHead className="text-right">Derniere Connexion</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allUsers.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="font-medium">{item.username}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {item.emailAddresses[0]?.emailAddress}
                  </div>
                </TableCell>

                <TableCell className="hidden sm:table-cell">
                  {(item.publicMetadata?.role as string) ?? "Default"}
                </TableCell>

                <TableCell className="hidden sm:table-cell">
                  {item.fullName ?? "N/A"}
                </TableCell>

                <TableCell className="hidden sm:table-cell">
                  {item.phoneNumbers[0]?.phoneNumber ?? "N/A"}
                </TableCell>

                <TableCell className="text-right">
                  {item.lastActiveAt
                    ? new Date(item.lastActiveAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"outline"} size={"icon"}>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Changer Role</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={async () => setUserRole(item.id, "admin")}
                      >
                        Admin
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={async () => setUserRole(item.id, "specialist")}
                      >
                        Specialist
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={async () => setUserRole(item.id, "user")}
                      >
                        Utilisateur
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersTable;
