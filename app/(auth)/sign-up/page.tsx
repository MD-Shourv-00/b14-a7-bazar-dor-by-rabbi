"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";

const SignUpPage = () => {
  const [password, setPassword] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Validated form data:", data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f0f5f1] px-4 py-8 sm:py-10">
      <h1 className="text-3xl font-bold text-[#202820]">
        অ্যাকাউন্ট তৈরি করুন
      </h1>

      <p className="mt-2 text-center text-[#68716c]">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div className="mt-8 w-full max-w-[520px] rounded-[20px] border border-[#dce5df] bg-[#fbfdfc] p-6 sm:p-[30px]">
        <Form
          validationBehavior="native"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5">
          <TextField
            name="name"
            isRequired
            validate={(value) =>
              value.trim().length < 2
                ? "কমপক্ষে ২ অক্ষরের নাম লিখুন।"
                : true
            }
            className="flex flex-col gap-2">
            <Label className="font-medium text-[#202820]">
              নাম
            </Label>
            <Input
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              autoComplete="name"
              className="h-[50px] w-full rounded-xl border border-[#d6e0d8] bg-transparent px-4 outline-none focus:border-[#008c45]"
            />
            <FieldError className="text-sm text-red-600" />
          </TextField>

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
            name="password"
            isRequired
            validate={(value) =>
              value.length < 8
                ? "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।"
                : true
            }
            className="flex flex-col gap-2">
            <Label className="font-medium text-[#202820]">
              পাসওয়ার্ড
            </Label>
            <Input
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Form>

        <div className="my-5 flex items-center gap-4 text-sm text-[#68716c]">
          <div className="h-[2px] flex-1 bg-[#e1e7e2]" />
          অথবা
          <div className="h-[2px] flex-1 bg-[#e1e7e2]" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            type="button"
            variant="bordered"
            className="h-[50px] border-[#dce5df] font-semibold">
            <FaGoogle className="text-[#4285f4]" />
            Google দিয়ে চালিয়ে যান
          </Button>

          <Button
            type="button"
            variant="bordered"
            className="h-[50px] border-[#dce5df] font-semibold">
            <FaGithub size={19} />
            GitHub দিয়ে চালিয়ে যান
          </Button>
        </div>

        <p className="mt-6 text-center text-[#303a33]">
          অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-[#008c45] hover:underline">
            সাইন ইন করুন
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

export default SignUpPage;
