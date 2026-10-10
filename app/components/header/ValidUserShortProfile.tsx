"use client";
import { signOut, useSession } from "@/app/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BiDownArrowAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const ValidUserShortProfile = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
    redirect("/");
  };
  return (
    <div className="flex gap-4 items-center max-md:flex-col-reverse max-md:gap-0.5 max-md:mt-4">
      <Dropdown>
        <Button className="text-black bg-white hover:text-green-500 font-bold text-[18px] max-md:text-[15px]">
          <BiDownArrowAlt className="text-green-500" />
          {session?.user.name}
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu
            onAction={(key) =>
              console.log(`Selected: ${key}`)
            }>
            <Dropdown.Item
              id="new-file"
              textValue="New file">
              <Link href={"/profile"}>
                <Label>আমার প্রোফাইল</Label>
              </Link>
            </Dropdown.Item>

            <Dropdown.Item
              id="delete-file"
              textValue="Delete file"
              variant="danger">
              <button
                onClick={handleSignOut}
                type="button"
                className="flex items-center gap-1.5 rounded-lg border border-red-400 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50">
                <FiLogOut size={15} />
                সাইন আউট
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>

      <div className="relative h-14 w-16 overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={
            (session?.user.image as string) || "/tree.jpg"
          }
          alt="profile image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ValidUserShortProfile;
