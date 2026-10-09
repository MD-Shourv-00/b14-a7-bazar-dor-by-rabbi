import { ProductPriceData } from "@/app/type/type";
import Link from "next/link";
import React from "react";

const ProductCard = ({product}: { product : ProductPriceData}) => {

    const {image, nameBn, unit, today, change:{dir, pct}, slug} = product;

    // direction selection
      let direction;
      if (dir === "up") {
        direction = "▲";
      } else if (dir === "down") {
        direction = "▼";
      } else if (dir === "flat") {
        direction = "-";
      }

  return (
    <Link href={slug}>
      {" "}
      <div className="w-full max-w-[454px] rounded-[20px] border border-[#dce5df] bg-[#fbfdfc] p-5 max-sm:mx-2">
        {/* Product Info */}
        <div className="flex items-center gap-4">
          {/* Product Image */}
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[16px] bg-[#f0f5f1]">
            <span className="text-[30px]">{image}</span>
          </div>

          {/* Name and Unit */}
          <div className="flex flex-col">
            <h2 className="text-[21px] font-bold leading-tight text-[#202820]">
              {nameBn}
            </h2>

            <p className="mt-1 text-[15px] text-[#39433c]">
              {unit}
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-4 flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] text-[#303a33]">
              আজকের দাম
            </p>

            <p className="text-[21px] font-bold leading-tight text-[#202820]">
              {today}{" "}
              <span className="font-medium">টাকা</span>
            </p>
          </div>

          {/* Price Change */}
          <div
            className={`mb-1 flex items-center gap-1 rounded-full bg-[#f0f5f1] px-3 py-1.5 text-[14px] font-semibold ${dir === "up" ? "text-[#009447]" : dir === "down" ? "text-red-500" : dir === "flat" ? "text-gray-500" : ""}`}>
            <span className="text-[12px]">{direction}</span>
            <span>{pct + "%"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
