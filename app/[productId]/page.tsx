import { notFound } from "next/navigation";
import { ProductPriceData } from "../type/type";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  
  const { productId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );

  const productData: ProductPriceData = await res.json();

  // wrong path handle with 404
  if (productData.error === "Not found") {
    notFound();
  }

  // console.log(productData);

  const {
    nameBn,
    categoryNameBn,
    unit,
    image,
    today,
    yesterday,
    change,
    markets,
  } = productData;

  // calculate summary value
  const priceStats = [
    {
      label: "সর্বনিম্ন দাম",
      price: Math.min(
        ...markets.map((item) => item.min),
      ).toLocaleString("bn-bd"),
      color: "text-green-600",
      subLabel: "সবচেয়ে কম দামের বাজার",
    },
    {
      label: "সর্বোচ্চ দাম",
      price: Math.max(
        ...markets.map((item) => item.max),
      ).toLocaleString("bn-bd"),
      color: "text-red-500",
      subLabel: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      label: "গড় দাম",
      price: Math.round(
        markets.reduce(
          (total, item) =>
            total + (item.min + item.max) / 2,
          0,
        ) / markets.length,
      ).toLocaleString("bn-bd"),
      color: "text-green-600",
      subLabel: `প্রতি ${unit} চালের বাজারদর`,
    },
  ];
  // price compare
  let resultLabel = `বৃদ্ধি পাইনি`;

  if (today > yesterday) {
    const howMuch = today - yesterday;
    resultLabel = `বেড়েছে • ${howMuch.toLocaleString("bn-bd")} টাকা`;
  } else if (yesterday > today) {
    const howMuch = yesterday - today;
    resultLabel = `কমেছে • ${howMuch.toLocaleString("bn-bd")} টাকা`;
  }

  return (
    <section className="min-h-screen bg-white px-5 py-6 text-[#303b34]">
      <div className="mx-auto container space-y-3.5">
        {/* product information card */}
        <div className="flex items-center justify-between rounded-xl border border-[#e3ebe4] bg-white p-3 max-sm:flex-col">
          {/* left side */}
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
              {image}
            </div>

            <div>
              <h1 className="text-xl font-bold">
                {nameBn}
              </h1>
              <p className="text-xs text-gray-500">
                প্রতি {unit} • {categoryNameBn}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                গতকালের তুলনায় আজ দাম {resultLabel}
              </p>
            </div>
          </div>

          {/* right side */}
          <div className="rounded-xl bg-[#f0f5f0] px-4 py-3 text-center max-sm:flex items-baseline gap-3 max-sm:mt-3 ">
            <p className="text-xs text-gray-500">
              আজকের বাজার
            </p>
            <p className="text-2xl font-bold">
              {today.toLocaleString("bn-bd")}
            </p>
            <p className="text-xs text-gray-500">
              টাকা / {unit}
            </p>
            {/* parcentage */}
            <p
              className={`mt-1 text-xs font-semibold ${
                change.dir === "up"
                  ? "text-red-500"
                  : change.dir === "down"
                    ? "text-green-600"
                    : change.dir === "flat"
                      ? "text-gray-600"
                      : ""
              }`}>
              {change.dir === "up"
                ? "	▲"
                : change.dir === "down"
                  ? "▼"
                  : change.dir === "flat"
                    ? "➖"
                    : ""}
              {change.pct.toLocaleString("bn-bd")}%
            </p>
          </div>
        </div>

        {/* Price summary and market table */}
        <div className="rounded-xl border border-[#e3ebe4] bg-[#e3ebe4] p-3">
          <h2 className="my-4 ml-2 text-md font-semibold">
            দামের সারসংক্ষেপ
          </h2>
          {/* Price summary cards */}
          <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
            {priceStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white p-3 max-sm:flex items-baseline gap-2 justify-center">
                <p className="text-xs text-gray-500">
                  {stat.label}
                </p>
                <p
                  className={`mt-1 text-base font-bold ${stat.color}`}>
                  {stat.price} টাকা
                </p>
                <p className="text-[10px] text-gray-500">
                  {stat.subLabel}
                </p>
              </div>
            ))}
          </div>

          <h2 className="my-4 ml-2 text-md font-semibold">
            বাজারভিত্তিক আজকের দাম
          </h2>
          {/* table */}
          <div className="overflow-hidden rounded-xl border border-[#e3ebe4]">
            <table className="w-full border-collapse text-left text-xs">
              <thead className="bg-[#f8faf8] text-gray-500">
                <tr>
                  <th className="px-3 py-3 font-medium">
                    বাজার
                  </th>
                  <th className="px-3 py-3 font-medium">
                    বিভাগ
                  </th>
                  <th className="px-3 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-3 py-3 text-right font-medium">
                    সর্বোচ্চ
                  </th>
                  <th className="px-3 py-3 text-right font-medium">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-[#f0f5f0]"
                        : "bg-white/80"
                    }>
                    <td className="border-t border-[#e3ebe4] px-3 py-3">
                      {market.market}
                    </td>

                    <td className="border-t border-[#e3ebe4] px-3 py-3">
                      {market.division}
                    </td>

                    <td className="border-t border-[#e3ebe4] px-3 py-3 text-right">
                      {market.min.toLocaleString("bn-bd")}{" "}
                      টাকা
                    </td>

                    <td className="border-t border-[#e3ebe4] px-3 py-3 text-right">
                      {market.max.toLocaleString("bn-bd")}{" "}
                      টাকা
                    </td>

                    <td className="border-t border-[#e3ebe4] px-3 py-3 text-right font-medium">
                      {(
                        (market.min + market.max) /
                        2
                      ).toLocaleString("bn-bd")}{" "}
                      টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
