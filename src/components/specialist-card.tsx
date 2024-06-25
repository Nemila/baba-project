import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import { type Specialist } from "@prisma/client";
import { clerkClient } from "@clerk/nextjs/server";

const SpecialistCard = async ({ item }: { item: Specialist }) => {
  const user = await clerkClient.users.getUser(item.userId);

  return (
    <Link href={`/specialists/${item.id}`}>
      <Card>
        <div className="flex items-center justify-between p-4">
          <div>
            <h3>{user.fullName}</h3>
            <p className="text-sm">{item.speciality}</p>
          </div>

          <figure className="size-16 overflow-hidden rounded-md">
            <Image
              alt=""
              width={500}
              height={500}
              src={user.imageUrl}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>

        <div className="flex justify-between border-t p-4">
          <div className="flex flex-col-reverse">
            <p className="text-sm font-medium text-gray-600">Experience</p>
            <p className="text-sm text-gray-500">{item.experience} ans</p>
          </div>

          <div className="flex flex-col-reverse">
            <p className="text-sm font-medium text-gray-600">Note</p>
            <p className="text-sm text-gray-500">{item.rating} / 10</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SpecialistCard;
