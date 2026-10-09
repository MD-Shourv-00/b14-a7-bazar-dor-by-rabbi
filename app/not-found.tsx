import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f0f5f1] px-5 py-12">
      <div className="flex w-full max-w-xl flex-col items-center rounded-3xl border border-[#dce5df] bg-white px-6 py-12 text-center shadow-sm sm:px-12">
        {/* 404 Illustration */}
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#e1f3e9] text-6xl">
          🛒
        </div>

        {/* Error Code */}
        <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-[#008c45]">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold text-[#202820] sm:text-3xl">
          দুঃখিত! পৃষ্ঠা খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো সরানো হয়েছে,
          ঠিকানা পরিবর্তন হয়েছে অথবা পৃষ্ঠাটি আর উপলব্ধ নেই।
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#008c45] px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#007a3c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008c45]">
          ← হোম পেজে ফিরে যান
        </Link>

        <p className="mt-6 text-sm text-gray-500">
          বাজার দর — প্রতিদিনের বাজারের হিসাব
        </p>
      </div>
    </main>
  );
}
