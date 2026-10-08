"use client";
import Image from "next/image";
import TodaysBanglaDate from "../TodaysBanglaDate";
import { Suspense, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[86px] container items-center justify-between px-6 md:px-12">
          {/* Logo + Store Info */}
          <Link href={"/"}>
            {" "}
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className=" flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#008C45]">
                <Image
                  src={"/logo-icon.png"}
                  alt="Logo icon"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              {/* Store Name + Date */}
              <div className="leading-none">
                <h1 className="text-[24px] font-bold tracking-tight text-[#202020]">
                  বাজার দর
                </h1>

                <Suspense fallback="date is loading...">
                  {" "}
                  <TodaysBanglaDate />
                </Suspense>
              </div>
            </div>
          </Link>

          {/* sign in and sign up btn and profile */}
          <div className="flex items-center gap-8">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}>
              {/* <span className="sr-only text-black">Menu</span> */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="max-md:hidden flex gap-7 items-center">
              <Link href="/sing-in">
                <button className="text-[16px] font-semibold text-[#202020] transition hover:text-[#008C45]">
                  সাইন ইন
                </button>
              </Link>

              <Link href="/sign-up">
                <button className="rounded-[10px] bg-[#008C45] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_3px_5px_rgba(0,0,0,0.25)] transition hover:bg-[#007a3d]">
                  সাইন আপ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-y container mx-auto border-separator md:hidden">
          <ul className="flex flex-col items-end gap-2 p-4">
            <li>
              <Link href="/sing-in" className="block py-2">
                <button className="text-[16px] font-semibold text-[#202020] transition hover:text-[#008C45]">
                  সাইন ইন
                </button>
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="block py-2 font-medium text-accent">
                <button className="rounded-[10px] bg-[#008C45] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_3px_5px_rgba(0,0,0,0.25)] transition hover:bg-[#007a3d]">
                  সাইন আপ
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
