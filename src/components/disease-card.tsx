import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

const DiseaseCard = () => {
  return (
    <Link href="/diseases/1">
      <Card className="space-y-4 p-4">
        <Badge>High Risk</Badge>

        <h4 className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias
          at molestias rerum consequatur quod numquam necessitatibus nihil autem
          cumque fuga architecto neque minus praesentium repellendus, quisquam
          tenetur veritatis nisi?
        </h4>

        <p className="text-sm">Publie le 06/15/2024</p>
      </Card>
    </Link>
  );
};

export default DiseaseCard;
