import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";

const SpecialistCard = async () => {
  return (
    <Link href={`/specialists/1`}>
      <Card>
        <div className="flex items-center justify-between p-4">
          <div>
            <h3>Lamine Diamoutene</h3>
            <p className="text-sm">Cardiologie</p>
          </div>

          <figure className="size-16 overflow-hidden rounded-md">
            <Image
              alt=""
              width={500}
              height={500}
              src={`https://avatarfiles.alphacoders.com/375/375590.png`}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>

        <div className="flex justify-between border-t p-4">
          <div className="flex flex-col-reverse">
            <p className="text-sm font-medium text-gray-600">Experience</p>
            <p className="text-sm text-gray-500">10 ans</p>
          </div>

          <div className="flex flex-col-reverse">
            <p className="text-sm font-medium text-gray-600">Note</p>
            <p className="text-sm text-gray-500">9.4 / 10</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SpecialistCard;
