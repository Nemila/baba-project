import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const SpecialistDetails = ({ params }: Props) => {
  return (
    <div>
      <p>Specialist Details {params.id}</p>
    </div>
  );
};

export default SpecialistDetails;
