"use client";
import {
  AtSign,
  Calendar,
  Hospital,
  MapPin,
  Stethoscope,
  UserRound,
} from "lucide-react";
import AppointmentCardActionButton from "./appointment-card-action-button";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const latitude = 38.9419;
const longitude = -78.302;

const AppointmentCard = () => {
  return (
    <Card>
      <CardHeader>
        <Badge className="h-8 rounded-md">En Attente</Badge>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <UserRound className="h-5 w-5" />
              <span>Lamine Diamoutene</span>
            </p>

            <p className="flex items-center gap-2">
              <AtSign className="h-5 w-5" />
              <span>pridila1@gmail.com</span>
            </p>

            <p className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              <span>Cardiologie</span>
            </p>

            <p className="flex items-center gap-2">
              <Hospital className="h-5 w-5" />
              <span>Seattle, Washington, États-Unis</span>
            </p>

            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>10/17/2024 a 16h25</span>
            </p>

            <Button variant={"link"} className="mt-2 h-fit w-fit p-0" asChild>
              <a href="#">Voir la fiche medicale</a>
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-4">
        <Button className="flex-1" asChild>
          <a href="#">Google Meet</a>
        </Button>

        <Button variant={"outline"} size={"icon"} asChild>
          <a
            href={`http://maps.google.com/maps?z=12&t=k&q=loc:${latitude}+${longitude}`}
          >
            <MapPin className="h-4 w-4" />
          </a>
        </Button>

        <AppointmentCardActionButton />
      </CardFooter>
    </Card>
  );
};

export default AppointmentCard;
