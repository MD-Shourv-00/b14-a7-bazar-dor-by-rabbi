// "use client"
import { ProductPriceData } from "@/app/type/type";
import Link from "next/link";

const MarqueeItems = ({
  productData,
}: {
  productData: ProductPriceData;
}) => {
  const {
    nameBn,
    today,
    unit,
    id,
    change: { dir, pct },
  } = productData;

  let direction;
  if (dir === "up") {
    direction = "▲";
  } else if (dir === "down") {
    direction = "▼";
  } else if (dir === "flat") {
    direction = "-";
  }
  return (
    <Link href={`/${id}`}>
      {" "}
      <div key={productData.id}>
        {" "}
        {/* Rice Icon */}
        <span className="text-[18px] ml-7">🍚</span>
        {/* Product Name & Price */}
        <span className="text-[#303833] mx-2">
          {nameBn}
        </span>
        <span className="text-[#303833] mr-2">
          {`${today.toLocaleString("bn-bd")} টাকা/${unit}`}
        </span>
        {/* Percentage */}
        <span
          className={`font-medium ${dir === "down" ? "text-[#009447]" : dir === "up" ? "text-red-500" : dir === "flat" ? "text-gray-500" : ""}  `}>
          {`${direction} ${pct.toLocaleString("bn-bd")} %`}
        </span>
      </div>
    </Link>
  );
};

export default MarqueeItems;
