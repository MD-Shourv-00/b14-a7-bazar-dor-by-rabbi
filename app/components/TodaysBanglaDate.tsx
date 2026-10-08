
"use client";

const TodaysBanglaDate = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <p className="mt-2 text-[13px] text-gray-500">{date}</p>;
};

export default TodaysBanglaDate;
