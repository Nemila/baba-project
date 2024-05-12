import { clerkClient } from "@clerk/nextjs/server";
import type { Specialist } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = { data: Specialist };

const SpecialistCard = async ({ data }: Props) => {
  const user = await clerkClient.users.getUser(data.userId);

  return (
    <Link
      href={`/specialists/${data.id}`}
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {user.fullName}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <Image
            alt=""
            width={64}
            height={64}
            src={user.imageUrl}
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="line-clamp-2 text-pretty text-sm text-gray-500">
          {data.description}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Experience</dt>
          <dd className="text-xs text-gray-500">{data.experience} Years</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Rating</dt>
          <dd className="text-xs text-gray-500">
            {data.rating.toFixed(1)} / 10
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Speciality</dt>
          <dd className="text-xs text-gray-500">{data.speciality}</dd>
        </div>
      </dl>
    </Link>
  );
};

export default SpecialistCard;
