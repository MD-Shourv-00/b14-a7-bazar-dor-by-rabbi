import { allProductsfetching } from "../Marquee/Marquee";
import ProductCard from "./cards/ProductCard";

const MainSectionOfHomePage = async () => {
  const allProducts = await allProductsfetching();

  //filtered for raise, down
  const riseProduct = allProducts.filter(
    (p) => p.change.dir === "up",
  );
  const downProduct = allProducts.filter(
    (p) => p.change.dir === "down",
  );

  return (
    <main>
      <div className="container mx-auto max-md:mx-2">
        <div className="my-8">
          <h2 className="font-bold text-2xl">
            <span className="text-red-500 mr-2">▲</span>
            আজ দাম বেড়েছে
          </h2>
          {/* rise product card here */}
          <div className="grid grid-cols-3 gap-4 my-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {" "}
            {riseProduct.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-2xl">
            <span className="text-green-500 mr-2 ">▼</span>
            আজ দাম কমেছে
          </h2>

          {/* down product card here */}
          <div className="grid grid-cols-3 gap-4 my-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {downProduct.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
        <div className="my-7">
          <h2 className="font-bold text-2xl">সব পণ্য</h2>
          <h4 className="text-slate-600">
            মোট ৩৩টি পণ্য দেখানো হচ্ছে
          </h4>

          {/* all product card here */}
          <div className="grid grid-cols-3 gap-4 my-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {" "}
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSectionOfHomePage;
