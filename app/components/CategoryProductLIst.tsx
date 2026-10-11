"use client";
import { useState } from "react";
import { ProductPriceData } from "../type/type";
import { Label, ListBox, Select } from "@heroui/react";
import SingleCategProductCard from "./homePage/cards/SingleCategProductCard";

const CategoryProductLIst = ({
  productDataByCategory,
}: {
  productDataByCategory: ProductPriceData[];
}) => {
  const [sortBy, setSortBy] = useState("");

  console.log(sortBy);

  const sortedSingleCategoriProduct = [
    ...productDataByCategory,
  ].sort((a, b) => {
    if (sortBy === "low-to-high") {
      return a.today - b.today;
    }

    if (sortBy === "high-to-low") {
      return b.today - a.today;
    }

    return a.id - b.id;
  });

  return (
    <div>
      {/* Sorting */}
      <div className="mt-6 flex items-center justify-end gap-2 rounded-2xl border border-[#dce5dd] bg-[#fafcfb] px-5 py-4">
        <span className="text-sm text-[#68736b]">
          সাজান
        </span>

        <Select
          className="w-[256px]"
          placeholder="ডিফল্ট"
          variant="secondary"
          onChange={(key) => setSortBy(`${key}`)}>
          <Label></Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item
                id="default"
                textValue="default">
                ডিফল্ট
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="low-to-high"
                textValue="low-to-high">
                দাম: কম থেকে বেশি
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="high-to-low"
                textValue="high-to-low">
                দাম: বেশি থেকে কম
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Product count */}
      <p className="my-4 text-sm text-[#68736b]">
        মোট{" "}
        {sortedSingleCategoriProduct.length.toLocaleString(
          "bn-bd",
        )}
        টি পণ্য দেখানো হচ্ছে
      </p>

      {/* product card */}
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {sortedSingleCategoriProduct.map(
          (singleProduct: ProductPriceData) => (
            <SingleCategProductCard
              key={singleProduct.id}
              singleProduct={singleProduct}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CategoryProductLIst;
