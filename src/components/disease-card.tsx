import Link from "next/link";

const DiseaseCard = () => {
  return (
    <div className="flex flex-col items-start gap-2 rounded-md border p-4 shadow-sm">
      <span className="badge badge-primary badge-sm h-auto py-0.5 font-bold">
        High Risk
      </span>
      <h6>Coronavirus disease (COVID-19)</h6>
      <p className="line-clamp-2 text-xs">
        Most people infected with the virus will experience mild to moderate
        respiratory illness and recover without requiring special treatment.
        However, some will become seriously ill and require medical attention.
        Older people and those with underlying medical conditions like
        cardiovascular disease, diabetes, chronic respiratory disease, or cancer
        are more likely to develop serious illness. Anyone can get sick with
        COVID-19 and become seriously ill or die at any age.{" "}
      </p>
      <Link href={"/"} className="link text-primary">
        Read More
      </Link>
    </div>
  );
};

export default DiseaseCard;
