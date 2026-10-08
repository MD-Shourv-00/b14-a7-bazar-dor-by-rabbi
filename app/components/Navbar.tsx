import type { CategoryType } from "../type/type";
import Link from "next/link";

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
  console.log(categories);

  return (
    <nav className="border-y border-gray-100 bg-white">
      <div className="flex h-[64px] container mx-auto justify-center items-center ">
        <ul className="flex gap-9">
          {/* showing categories in nav one by one*/}
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={category.slug}
                className="flex items-center gap-2 text-[16px] font-semibold text-[#202020] transition-colors hover:text-[#008C45]">
                <span className="text-[18px]">
                  {category.icon}
                </span>

                <span>{category.nameBn}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
