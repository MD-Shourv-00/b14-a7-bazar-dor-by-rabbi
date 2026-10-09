import MarqueeText from "react-marquee-text";
import { ProductPriceData } from "../../type/type";
import MarqueeItems from "./MarqueeItems";
import { Suspense } from "react";

export async function allProductsfetching(): Promise<
  ProductPriceData[]
> {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products",
    );

    if (!res.ok) {
      throw new Error("data fetching error");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

const Marquee = async () => {
  const allProductData = await allProductsfetching();

  // unit in bangla

  return (
    <MarqueeText
      direction="right"
      duration={10}
      className="my-2 "
      pauseOnHover={true}>
      <div className="bg-white flex items-center gap-2 text-[16px]">
        {allProductData.map((productData) => (
          <MarqueeItems
            key={productData.id}
            productData={productData}
          />
        ))}
      </div>
    </MarqueeText>
  );
};

export default Marquee;
