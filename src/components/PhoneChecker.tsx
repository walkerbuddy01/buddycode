"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";
import { useState, useTransition } from "react";
import { Button } from "./ui/button";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import { setPhoneNumber } from "@/serverAction/data/userDetails";
import { UserPhoneNumberSchema } from "@/zodValidation/UserDetailsSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CircleCheckBig,
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";
import { Input } from "./ui/input";

export default function PhoneChecker() {
  const [pending, startTransition] = useTransition();
  const [isSaved, setIsSaved] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const user = useCurrentUser();

  const form = useForm<z.infer<typeof UserPhoneNumberSchema>>({
    resolver: zodResolver(UserPhoneNumberSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const handleSetPhoneNumber = async (
    data: z.infer<typeof UserPhoneNumberSchema>
  ) => {
    startTransition(async () => {
      const res = await setPhoneNumber(data);
      if (res) {
        confetti({
          particleCount: 100,
          angle: 50,
          spread: 100,
          origin: { x: 0 },
          colors: ["#bb0000", "#ffffff", "#6f00ff"],
        });
        confetti({
          particleCount: 100,
          angle: 110,
          spread: 100,
          origin: { x: 1 },
          colors: ["#bb0000", "#ffffff", "#6f00ff"],
        });
        setIsSaved(true);
        setIsDialogOpen(true);
      }
    });
  };

  return (
    user &&
    (isSaved ? (
      <div className="h-full w-full bg-black">
        <Dialog open={isDialogOpen}>
          <DialogTrigger className="hidden">Open</DialogTrigger>
          <DialogContent className="bg-black">
            <DialogHeader>
              <DialogTitle>Your phone number is saved</DialogTitle>
              <DialogDescription>
                This is used for further communication. thanks for your patience
                & support.
              </DialogDescription>
              <div className="flex flex-col items-center gap-2">
                <CircleCheckBig className="w-16 h-16 text-green-500" />
                <p>Phone number saved successfully</p>
              </div>

              <Button
                className="w-full"
                onClick={() => {
                  router.push("/intership-programs");
                  setIsDialogOpen(false);
                }}
              >
                Explore Internship Programs 👻
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    ) : (
      <div className={cn(" w-full h-full bg-black")}>
        <Dialog open={true}>
          <DialogTrigger className="hidden">Open</DialogTrigger>
          <DialogContent className={cn("bg-black")}>
            <DialogHeader>
              <DialogTitle>Essential information</DialogTitle>
              <DialogDescription>
                Mobile number is required to for further communication.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSetPhoneNumber)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {pending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Add Phone Number"
                  )}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    ))
  );
}

{
  /*  */
}
