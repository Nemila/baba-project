import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

type Props = {
  href: string;
  description: string;
  danger: string;
};

const DiseaseCard = ({ href, description, danger }: Props) => {
  return (
    <Link href={`/diseases/${href}`}>
      <Card className="space-y-4 p-4">
        <Badge>{danger}</Badge>

        <h4 className="line-clamp-2">{description}</h4>

        <p className="text-sm">Publie le 06/15/2024</p>
      </Card>
    </Link>
  );
};

export default DiseaseCard;
