"use client"
import { CategoryType } from "@/app/type/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks =({
  category,
}: {
  category: CategoryType;
}) => {
  const pathname = usePathname().slice(1)
  // console.log('pathname', pathname , category.slug)

  return (
    <div>
      <Link
        href={category.slug}
        className={`flex items-center gap-2 text-[16px] font-semibold text-[#202020] transition-colors hover:text-[#008C45]  ${pathname === category.slug ? " bg-green-100 px-4 rounded-full py-2" : "bg-transparent px-4 py-2"}`}>
        <span className="text-[18px]">{category.icon}</span>

        <span>{category.nameBn}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
