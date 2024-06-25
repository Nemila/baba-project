"use client";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/use-toast";
import { editSpecialistProfile } from "~/lib/actions";

const formSchema = z.object({
  description: z.string().optional(),
  address: z.object({
    location: z.string(),
    longitude: z.coerce.number(),
    latitude: z.coerce.number(),
  }),
  socialLinks: z.object({
    twitter: z.string().url(),
    facebook: z.string().url(),
    instagram: z.string().url(),
  }),
});

export type IEditSpecialistProfile = z.infer<typeof formSchema>;

const SpecialistEditPage = () => {
  const { user } = useUser();
  const navigate = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) return navigate.replace("/");

    try {
      await editSpecialistProfile(user.id, values);
      toast({
        title: "Profile modifie avec succes",
      });
    } catch (error) {
      toast({
        title: "Un probleme est survenu",
        variant: "destructive",
      });
      console.log(error);
    }
  }

  return (
    <div className="flex-1 py-6">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 overflow-hidden rounded-md border bg-white p-6">
        <Button className="self-start" onClick={() => navigate.back()}>
          <ChevronLeft className="mr-2 h-5 w-5" />
          Retour
        </Button>

        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Modifier Votre Profile
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-2">
            Les utilisateurs et autres docteurs pourrons voir les informations
            se trouvant sur votre profile. Veuillez ne pas entrer
            d&apos;informations confidentielles ou fausses.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-6"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field}></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2 grid grid-cols-3 gap-4 rounded-md border p-4">
              <FormField
                control={form.control}
                name="address.location"
                render={({ field }) => (
                  <FormItem className="col-span-3 md:col-span-1">
                    <FormLabel>Address de travail</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.longitude"
                render={({ field }) => (
                  <FormItem className="col-span-3 md:col-span-1">
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.latitude"
                render={({ field }) => (
                  <FormItem className="col-span-3 md:col-span-1">
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2 grid grid-cols-3 gap-4 rounded-md border p-4">
              <FormField
                control={form.control}
                name="socialLinks.facebook"
                render={({ field }) => (
                  <FormItem className="col-span-3 md:col-span-1">
                    <FormLabel>Facebook</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.twitter"
                render={({ field }) => (
                  <FormItem className="col-span-3 md:col-span-1">
                    <FormLabel>Twitter</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="socialLinks.instagram"
                render={({ field }) => (
                  <FormItem className="col-span-3 md:col-span-1">
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="col-span-1"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Enregister
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SpecialistEditPage;
