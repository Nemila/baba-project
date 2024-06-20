import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import UsersTable from "~/components/users-table";
import SpecialistsCard from "./_components/specialists-card";

const Dashboard = async () => {
  const users = await clerkClient.users.getUserList();

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

              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total utilisateurs</CardDescription>
                  <CardTitle className="text-4xl">500</CardTitle>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button className="w-full" variant={"outline"}>
                    Voir Tout
                  </Button>
                </CardFooter>
              </Card>

              <Card x-chunk="dashboard-05-chunk-2">
                <CardHeader className="pb-2">
                  <CardDescription>Maladies repertories</CardDescription>
                  <CardTitle className="text-4xl">5000</CardTitle>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Button className="w-full" variant={"outline"}>
                    Voir Tout
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Tabs defaultValue="users">
              <TabsList>
                <TabsTrigger value="users">Utilisateurs</TabsTrigger>
              </TabsList>

              <TabsContent value="users">
                <UsersTable users={JSON.stringify(users.data)} />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
