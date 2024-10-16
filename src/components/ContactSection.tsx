"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { sendEmail } from "../serverAction/sendEmail/emails";
import { UserContactSchema } from "../zodValidation/UserDetailsSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Loader2 } from "lucide-react";
import { techImagesLinks } from "@/lib/constant";
export default function ContactSection({
  serviceName,
}: {
  serviceName: string;
}) {
  const user = useCurrentUser();
  const [pending, startTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(UserContactSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const handleMail = async (data: z.infer<typeof UserContactSchema>) => {
    startTransition(async () => {
      await sendEmail(
        user?.email || "undefined@gmail.com",
        data.name,
        serviceName,
        data.description
      );
    });
  };
  return (
    <div
      className="w-full bg-gray-400 bg-opacity-10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-100/20  mt-7 flex
"
    >
      <div className="flex flex-col sm:w-1/2 w-full items-center">
        <h3 className="mb-10 border-b border-zinc-700 pb-5 w-full mt-5 px-5">
          <span className="text-3xl font-helveticaNowDisplayBold ">
            Contact for {serviceName}
          </span>
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleMail)}
            className=" w-full  p-5 space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 peer placeholder-transparent"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Subject</FormLabel>
                  <FormControl>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 peer placeholder-transparent "
                      required
                      {...field}
                    ></textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg ">Service</FormLabel>
                  <FormControl>
                    <div>
                      <select
                        className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 max-w-sm transition-all duration-300 peer placeholder-transparent"
                        disabled
                        {...field}
                      >
                        <option>{serviceName}</option>
                      </select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition duration-150 ease-in-out mt-5"
              disabled={pending}
            >
              {pending ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </Form>
      </div>
      <div className="w-1/2 rounded-r-md sm:block hidden">
        <Image
          src={techImagesLinks.contactUs}
          alt="contact"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-r-md"
        />
      </div>
    </div>
  );
}
