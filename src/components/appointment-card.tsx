import {
  AtSign,
  Calendar,
  Hospital,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const AppointmentCard = async () => {
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
          </div>
        </div>
        {/* 
        <div>
          <p>Client: John Doe</p>
          <p>pridila.2006@gmail.com</p>
          <time>06/17/2024</time>
        </div> */}
      </CardContent>

      <CardFooter>
        <Button variant={"outline"} className="w-full">
          Annuler reservation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AppointmentCard;
