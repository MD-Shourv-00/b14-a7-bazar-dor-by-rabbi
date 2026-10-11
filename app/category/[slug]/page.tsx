import CategoryProductLIst from "@/app/components/CategoryProductLIst";
import { ProductPriceData } from "@/app/type/type";
import { notFound } from "next/navigation";

const CategoriePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`,
  );

  const productDataByCategory: ProductPriceData[] =
    await res.json();

//   wrong route handle
  if(productDataByCategory.length === 0){
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f0f5f0] px-5 py-4 text-[#202a23] sm:px-9">
      <div className="mx-auto container">
        {/* first category showing div */}
        <div className="flex items-center gap-3 rounded-2xl border border-[#dce5dd] bg-[#fafcfb] px-5 py-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f4f0] text-3xl">
            {productDataByCategory[0].image}
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {productDataByCategory[0].categoryNameBn}
            </h2>
            <p className="text-sm text-[#68736b]">
              {productDataByCategory.length.toLocaleString(
                "bn-bd",
              )}
              টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <CategoryProductLIst
          productDataByCategory={productDataByCategory}
        />
      </div>
    </div>
  );
};

export default CategoriePage;
