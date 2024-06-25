"use client";
import { type Prisma } from "@prisma/client";
import {
  Calendar,
  Clock,
  Hospital,
  MapPin,
  Stethoscope,
  UserRound,
} from "lucide-react";
import AppointmentCardActionButton from "./appointment-card-action-button";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { useState } from "react";

type AdresseType = {
  location: string | null | undefined;
  longitude: number | null | undefined;
  latitude: number | null | undefined;
};

const AppointmentCard = ({
  appointment,
}: {
  appointment: Prisma.AppointmentGetPayload<{
    include: {
      specialist: true;
    };
  }>;
}) => {
  const [location] = useState<AdresseType>(
    appointment.specialist?.location as AdresseType,
  );

  return (
    <Card>
      <CardHeader>
        <Badge className="h-8 rounded-md">{appointment.status}</Badge>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <UserRound className="h-5 w-5" />
              <span>Dr. {appointment.specialist.fullName}</span>
            </p>

            <p className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              <span>{appointment.specialist.speciality}</span>
            </p>

            <p className="flex items-center gap-2">
              <Hospital className="h-5 w-5" />
              <span>{location?.location ?? "Aucune adresse"}</span>
            </p>

            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{appointment.meetingDate.toLocaleDateString()}</span>
            </p>

            <p className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{appointment?.meetingTime ?? "Pas encore attribuer"}</span>
            </p>

            <Button variant={"link"} className="mt-2 h-fit w-fit p-0" asChild>
              <a href="#">Voir la fiche medicale</a>
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-4">
        <Button
          className="flex-1"
          disabled={!appointment?.meetingLink ? true : false}
          onClick={() => {
            if (!appointment?.meetingLink) return;
            window.location.href = appointment.meetingLink;
          }}
        >
          Google Meet
        </Button>

        <Button
          variant={"outline"}
          size={"icon"}
          disabled={!location?.location ? true : false}
          onClick={() => {
            if (!location?.location) return;
            window.location.href = `http://maps.google.com/maps?z=12&t=k&q=loc:${location.latitude}+${location.longitude}`;
          }}
        >
          <MapPin className="h-4 w-4" />
        </Button>

        <AppointmentCardActionButton appointment={appointment} />
      </CardFooter>
    </Card>
  );
};

export default AppointmentCard;
