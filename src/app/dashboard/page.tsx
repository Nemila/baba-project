import { clerkClient } from "@clerk/nextjs/server";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import UsersTable from "~/components/users-table";
import SpecialistsCard from "./_components/specialists-card";

const Dashboard = async () => {
  const users = await clerkClient.users.getUserList({ limit: 500 });

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col py-4">
        <main className="container">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
             xl:grid-cols-5"
            >
              <SpecialistsCard users={JSON.stringify(users.data)} />

              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Maladies répertoriées</CardDescription>
                  <CardTitle className="text-4xl">5000</CardTitle>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button className="w-full" variant={"outline"} asChild>
                    <Link href={`/diseases`}>Voir Tout</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <UserRound className="h-8 w-8" />
                  <CardDescription>Utilisateurs totaux</CardDescription>
                  <CardTitle className="text-4xl">500</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <UsersTable users={JSON.stringify(users.data)} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
