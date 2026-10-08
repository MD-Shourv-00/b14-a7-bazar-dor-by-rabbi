// "use client"
import { ProductPriceData } from "@/app/type/type";
import {
  RiArrowDownFill,
  RiArrowUpSFill,
} from "react-icons/ri";
import { TiMinus } from "react-icons/ti";

const MarqueeItems = ({
  productData,
}: {
  productData: ProductPriceData;
}) => {
  const {
    nameBn,
    today,
    unit,
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
    <div key={productData.id}>
      {" "}
      {/* Rice Icon */}
      <span className="text-[18px] ml-7">🍚</span>
      {/* Product Name & Price */}
      <span className="text-[#303833] mx-2">{nameBn}</span>
      <span className="text-[#303833] mr-2">
        {`${today} Taka/${unit}`}
      </span>
      {/* Percentage */}
      <span
        className={`font-medium ${dir === "up" ? "text-[#009447]" : dir === "down" ? "text-red-500" : dir === "flat" ? "text-gray-500" : ""}  `}>
        {`${direction} ${pct} %`}
      </span>
    </div>
  );
};

export default MarqueeItems;
