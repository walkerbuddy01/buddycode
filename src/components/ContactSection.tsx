"use client";

import { sendEmail } from "../serverAction/sendEmail/emails";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContactSchema } from "../zodValidation/UserDetailsSchemas";
import * as z from "zod";
import { useCurrentUser } from "../hooks/useCurrentUser";
export default function ContactSection() {
  const user = useCurrentUser();
  const form = useForm(
    {
      resolver: zodResolver(UserContactSchema),
      defaultValues: {
        name: "",
        description: "",
      },
    }
  );

  const handleMail = async (data: z.infer<typeof UserContactSchema>) => {
    await sendEmail(
      user?.email || "undefined@gmail.com",
      data.name,
      "Frontend Development",
      data.description
    );
  };
  return (
    <div
      className="w-full bg-gray-400 bg-opacity-10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-100/20  mt-7 flex
"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleMail)}
          className="sm:w-1/2 w-full p-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 peer placeholder-transparent"
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
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <div>
                    <select
                      className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 max-w-sm transition-all duration-300 peer placeholder-transparent"
                      disabled
                      {...field}
                    >
                      <option>{"Selected Service"}</option>
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
          >
            Send Message
          </button>
        </form>
      </Form>
      <div className="w-1/2 rounded-r-md sm:block hidden">
        <Image
          src="https://ik.imagekit.io/bc/Images/Frame%2010%20(2)%20(1).png?updatedAt=1727977810683"
          alt="contact"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-r-md"
        />
      </div>
    </div>
  );
}

{
  /* <div className="mt-8 max-w-md">
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-5 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-emerald-500"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 text-white bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 peer placeholder-transparent"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-3 -top-5 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-emerald-500"
                  >
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-600 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div> */
}
