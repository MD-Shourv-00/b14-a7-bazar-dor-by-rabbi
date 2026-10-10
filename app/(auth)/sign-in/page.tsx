"use client";

import Link from "next/link";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { signIn, useSession } from "@/app/lib/auth-client";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const { data: session } = useSession();

  if (session?.user) {
    redirect("/");
  }
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("sign-in data:", data);

    const { data: resData, error } = await signIn.email({
      email: data.email as string,
      password: data.password as string,
    });

    console.log("response in sign-in", resData);
    console.log("Error in sign-in", error);
  };

  // sign in with google
  const handleGoogleSignIn = async () => {
    const data = await signIn.social({
      provider: "google",
    });

    console.log("data for google sign in", data);
  };

  //sign in with github
  const handleGithubSignIn = async () => {
    const data = await signIn.social({
      provider: "github",
    });

    console.log("data of github", data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f0f5f1] px-4 py-10 sm:py-12">
      <h1 className="text-3xl font-bold text-[#202820]">
        সাইন ইন
      </h1>

      <p className="mt-2 text-center text-[#68716c]">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে
        অ্যাকাউন্টে ঢুকুন।
      </p>

      <div className="mt-8 w-full max-w-[520px] rounded-[20px] border border-[#dce5df] bg-[#fbfdfc] p-6 sm:p-[30px]">
        <Form
          validationBehavior="native"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5">
          <TextField
            name="email"
            type="email"
            isRequired
            validate={(value) =>
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? "সঠিক ইমেইল ঠিকানা লিখুন।"
                : true
            }
            className="flex flex-col gap-2">
            <Label className="font-medium text-[#202820]">
              ইমেইল
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="h-[50px] w-full rounded-xl border border-[#d6e0d8] bg-transparent px-4 outline-none focus:border-[#008c45]"
            />
            <FieldError className="text-sm text-red-600" />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
              }
              if (!/[A-Z]/.test(value)) {
                return "পাসওয়ার্ডে কমপক্ষে একটি বড় হাতের ইংরেজি অক্ষর থাকতে হবে";
              }
              if (!/[0-9]/.test(value)) {
                return "পাসওয়ার্ডে কমপক্ষে একটি সংখ্যা থাকতে হবে";
              }
              return null;
            }}>
            <Label>পাসওয়ার্ড</Label>
            <Input
              className="h-[50px] w-full rounded-xl border border-[#d6e0d8] bg-transparent px-4 outline-none focus:border-[#008c45] mb-2"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
            />
            <Description>
              কমপক্ষে ৮ অক্ষর, একটি বড় হাতের ইংরেজি অক্ষর
              এবং একটি সংখ্যা থাকতে হবে।
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="h-[51px] w-full rounded-xl bg-[#008c45] font-semibold text-white shadow-md hover:bg-[#007a3c]">
            সাইন ইন
          </Button>
        </Form>

        <div className="my-5 flex items-center gap-4 text-sm text-[#68716c]">
          <div className="h-[2px] flex-1 bg-[#e1e7e2]" />
          অথবা
          <div className="h-[2px] flex-1 bg-[#e1e7e2]" />
        </div>

        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 max-sm:justify-center max-sm:items-center ">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full"
            variant="tertiary">
            <Icon icon="devicon:google" />
            Google দিয়ে চালিয়ে যান
          </Button>
          <Button
            onClick={handleGithubSignIn}
            className="w-full"
            variant="tertiary">
            <Icon icon="mdi:github" />
            Github দিয়ে
          </Button>
        </div>

        <p className="mt-6 text-center text-[#303a33]">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-[#008c45] hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      <Link
        href="/"
        className="mt-7 text-[#68716c] hover:text-[#008c45]">
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
};

export default SignInPage;
