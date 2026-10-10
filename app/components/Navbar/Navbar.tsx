import type { CategoryType } from "../../type/type";
import NavLinks from "./NavLinks";

export async function CategoriDataFetching(): Promise<
  CategoryType[]
> {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/categories",
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

const Navbar = async () => {
  const categories = await CategoriDataFetching();

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="flex h-auto py-4 container mx-auto justify-center items-center ">
        <div className="grid grid-cols-8 max-lg:grid-cols-4 max-sm:grid-cols-3 gap-1 max-sm:gap-4">
          {/* showing categories in nav one by one*/}
          {categories.map((category) => (
            <NavLinks
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
