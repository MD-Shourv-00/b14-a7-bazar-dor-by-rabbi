"use client";
import {
  signOut,
  updateUser,
  useSession,
} from "@/app/lib/auth-client";
import {
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

const ProfilePage = () => {
  const { data: session } = useSession();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await updateUser({
      name: data.name as string,
    });
  }

  const handleSignOut = async () => {
    const { data, error } = await signOut();
    console.log("sign-out data", data);
    console.log("sign-out error", error);

    redirect("/");
  };

  return (
    <section className="min-h-screen bg-[#f0f5f0] px-6 py-6 text-[#303b34]">
      <div className="mx-auto max-w-[592px]">
        <div className="mb-5">
          <h1 className="text-2xl font-bold">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন
          </p>
        </div>

        {/* Profile information */}
        <div className="mb-5 flex items-center justify-between rounded-xl border border-[#e2eae3] bg-white/80 p-5">
          <div className="flex items-center gap-3">
            {/* image space */}
            <div className="relative h-14 w-16 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={
                  (session?.user.image as string) ||
                  "/tree.jpg"
                }
                alt="profile image"
                fill
                className="object-cover"
              />
            </div>
            {/* name and email */}
            <div>
              <h2 className="text-base font-semibold">
                {session?.user.name}
              </h2>
              <p className="text-sm text-gray-500">
                {session?.user.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            type="button"
            className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-red-400 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50">
            <FiLogOut size={15} />
            সাইন আউট
          </button>
        </div>
        {/* Profile form */}
        <div className="rounded-xl border border-[#e2eae3] bg-white/80 p-4">
          <h2 className="mb-7 text-sm font-bold">তথ্য</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 px-4 pb-4">
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
                placeholder="যেমন: জালাল উদ্দিন"
                autoComplete="name"
                className="h-[50px] w-full rounded-xl border border-[#d6e0d8] bg-transparent px-4 outline-none focus:border-[#008c45]"
              />
              <FieldError className="text-sm text-red-600" />
            </TextField>
            <button
              type="submit"
              className="cursor-pointer w-full rounded-lg bg-[#008c45] py-2.5 text-sm font-semibold text-white shadow-[0_3px_4px_rgba(0,0,0,0.25)] transition hover:bg-[#007a3c]">
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
