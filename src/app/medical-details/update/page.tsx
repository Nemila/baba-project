"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import { DependencyType } from "~/components/ui/auto-form/types";
import { useToast } from "~/components/ui/use-toast";
import { updateMedicalDetails } from "~/lib/actions";

const formSchema = z.object({
  phoneNumber: z.string().min(8),
  genre: z.enum(["MASCULIN", "FEMININ"]),
  bloodGroup: z.enum(["O", "A", "B"]),

  hasAllergies: z.boolean().optional(),
  allergies: z.string().optional(),
  hasChronicConditions: z.boolean().optional(),
  chronicConditions: z.string().optional(),

  isSmoker: z.boolean().default(false).optional(),
  isDrinker: z.boolean().default(false).optional(),
  isSportman: z.boolean().default(false).optional(),
  wasHopitalized: z.boolean().default(false).optional(),
});

const MedicalDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await updateMedicalDetails(values);
      toast({
        title: "Done",
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-1 py-6">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 overflow-hidden rounded-md border bg-white p-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Fiche Médicale
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            Les docteurs utiliseront les informations que vous aurez renseigne
            ici pour mieux comprendre votre sante avant de vous rencontrer.
            Assurez vous de rensignez des informations valides.
          </p>
        </div>

        <AutoForm
          formSchema={formSchema}
          fieldConfig={{
            phoneNumber: {
              label: "Numero de téléphone",
              inputProps: {
                placeholder: "Ex: 79153505",
              },
            },

            genre: {
              label: "Quel est votre genre",
              inputProps: {
                placeholder: "Selectionnez",
              },
            },

            hasAllergies: {
              fieldType: "switch",
              label: "Avez-vous des allergies ?",
            },
            allergies: {
              label: "Decrivez vos allergies",
              fieldType: "textarea",
            },
            hasChronicConditions: {
              fieldType: "switch",
              label: "Avez-vous des conditions chroniques ?",
            },
            chronicConditions: {
              label: "Decrivez vos conditions chroniques",
              fieldType: "textarea",
            },

            isSmoker: {
              label: "Etes-vous un fumeur ?",
            },
            isDrinker: {
              label: "Etes-vous un buveur ?",
            },
            isSportman: {
              label: "Faites-vous du sport ?",
            },
            wasHopitalized: {
              label: "Avez-vous déja été hospitalisé(e) ?",
            },

            bloodGroup: {
              label: "Groupe Sanguin",
              inputProps: {
                placeholder: "Selectionnez",
              },
            },
          }}
          dependencies={[
            {
              sourceField: "hasAllergies",
              type: DependencyType.HIDES,
              targetField: "allergies",
              when: (hasAllergies: boolean) => !hasAllergies,
            },
            {
              sourceField: "hasChronicConditions",
              type: DependencyType.HIDES,
              targetField: "chronicConditions",
              when: (hasChronicConditions: boolean) => !hasChronicConditions,
            },
          ]}
          onSubmit={handleSubmit}
        >
          <AutoFormSubmit disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Enregistrer
          </AutoFormSubmit>

          <p className="text-sm text-gray-500">
            Vous pourrez modifier les informations sur cette page a
            n&apos;importe quel moment.
          </p>
        </AutoForm>
      </div>
    </div>
  );
};

export default MedicalDetailsPage;
