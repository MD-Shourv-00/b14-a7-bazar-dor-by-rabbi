import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import TodaysBanglaDate from "../TodaysBanglaDate";

const Banner = () => {
  return (
    <div className="mx-auto my-4 flex min-h-[350px] container mx-auto items-center justify-between rounded-[28px] border border-[#dce5df] bg-[#f9fbfa] px-5 py-8 max-lg:flex-col">
      {/* Left Content */}
      <div className="flex flex-col items-start max-md:items-center ml-5">
        {/* Date */}
        <div className="rounded-full bg-[#e1f3e9] px-4 py-1.5 text-[16px] max-sm:text-[14px] font-semibold text-[#008c45]">
          <Suspense fallback="loading...">
            <TodaysBanglaDate />
          </Suspense>
        </div>
        {/* Heading */}
        <h1 className="mt-4 max-md:text-center max-w-[700px] text-4xl max-sm:text-[27px] font-bold leading-[1.2] text-[#18221c] md:text-5xl">
          আজকের বাজারের দাম এক নজরে
        </h1>
        {/* Description */}
        <p className="mt-6 max-md:text-center max-w-[700px] text-[17px] max-sm:text-[14px] leading-8 text-[#68716c]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
          বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
          দামের পরিবর্তন এক জায়গায়।
        </p>
        {/* Button */}{" "}
        <Link
          href="#product-section"
          className="cursor-pointer mt-8 rounded-[10px] bg-[#008c45] px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_4px_5px_rgba(0,0,0,0.25)] transition hover:bg-[#007a3c]">
          সব পণ্য দেখুন
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-[35%]">
        <Image
          src="/bazar-hero.png"
          alt="bazar product buket"
          width={300}
          height={300}
          className="h-auto w-[280px] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
