import axios from "axios";

export const getMedicalDetailsPDF = async () => {
  const url = "https://us1.pdfgeneratorapi.com/api/v4/documents/generate";

  const data = {
    template: {
      id: "1109650",
      data: {
        nomComplet: "John Doe",
        dateNaissance: "1985-07-15",
        genre: "male",
        numeroTelephone: "1234567890",
        fumez: "oui",
        buvez: "non",
        sport: "oui",
        hospitalise: "non",
        allergies: "Aucune allergie connue",
        conditionsChroniques: "Hypertension",
      },
    },
    format: "pdf",
    output: "url",
    name: "MaliMed",
  };

  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5YmY2YWFmNzhmYTYyNjQ2Y2JlMzc0ZTcxMTI0YzUxNGY2OTNkYjJjZDAyNjIwZmFhODFiYjMwMjkwZGE5MTUwIiwic3ViIjoicHJpZGlsYS4yMDA2QGdtYWlsLmNvbSIsImV4cCI6MTcxODgyMDc0MX0.Xh1_m15Fb6funCDq0joCNTjjXFIUqg_TZD7IQdBt0cg",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(url, data, config);
    const pdfUrl = (res.data as { response: string }).response;
    console.log(pdfUrl);
    return pdfUrl;
  } catch (error) {
    console.log(error);
  }
};
