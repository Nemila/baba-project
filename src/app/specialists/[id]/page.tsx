import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";

type Props = {
  params: {
    id: string;
  };
};

const SpecialistDetails = async ({ params }: Props) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const data = await db.specialist.findUnique({
    where: { id },
  });

  if (!data) return notFound();
  const user = await clerkClient.users.getUser(data.userId);

  return (
    <div className="p-4">
      <p>Specialist Details {params.id}</p>
      <p>{user.fullName}</p>
      <p>{user.primaryEmailAddress?.emailAddress}</p>
      <p>{data.speciality}</p>

      <Image
        alt=""
        className="size-16 rounded-md object-cover object-center"
        width={64}
        height={64}
        src={user.imageUrl}
      />

      <p>{data.description}</p>

      <form action="/appointments/book">
        <input
          required
          type="hidden"
          name="specialistId"
          contentEditable={false}
          value={data.id}
        />
        <Button>Make Appointment</Button>
      </form>
    </div>
  );
};

export default SpecialistDetails;
