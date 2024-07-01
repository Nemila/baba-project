import { db } from "~/server/db";

const MedicalDetailsPage = async ({
  params,
}: {
  params: {
    userId: string;
  };
}) => {
  const medicalDetails = await db.medicalDetails.findUnique({
    where: {
      patientClerkId: params.userId,
    },
  });

  if (!medicalDetails)
    return (
      <div className="flex-1 p-4">
        <p>Aucune fiche medicale pour cet utilisateur.</p>
      </div>
    );

  return (
    <div className="flex-1 py-6">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 overflow-hidden rounded-md border bg-white p-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Fiche Medicale
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            Les docteurs utiliseront les informations que vous aurez renseigne
            ici pour mieux comprendre votre sante avant de vous rencontrer.
            Assurez vous de rensignez des informations valides.
          </p>
        </div>

        <div className="space-y-4">
          <p>Nom Complet: {medicalDetails?.patientName}</p>
          <p>Groupe Sanguin: {medicalDetails?.phoneNumber}</p>
          <p>Genre: {medicalDetails?.genre}</p>
          <p>Groupe Sanguin: {medicalDetails?.bloodGroup}</p>

          <p>
            Est ce que vous buvez: {medicalDetails?.isDrinker ? "Oui" : "Non"}
          </p>
          <p>
            Est ce que vous fumer: {medicalDetails?.isSmoker ? "Oui" : "Non"}
          </p>
          <p>
            Est ce que vous faites du sport:{" "}
            {medicalDetails?.isSportman ? "Oui" : "Non"}
          </p>
          <p>
            Est ce que vous avez deja ete hospitaliser:{" "}
            {medicalDetails?.wasHopitalized ? "Oui" : "Non"}
          </p>

          <p>Alergies ? {medicalDetails?.hasAllergies ? "Oui" : "Non"}</p>
          {medicalDetails?.hasAllergies && <p>{medicalDetails?.allergies}</p>}

          <p>
            Conditions Chroniques ?{" "}
            {medicalDetails?.hasChronicConditions ? "Oui" : "Non"}
          </p>
          {medicalDetails?.hasChronicConditions && (
            <p>{medicalDetails?.chronicConditions}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalDetailsPage;
