
const Footer = () => {
    return (
      <footer className="border-t border-[#e1e8e2] bg-[#f9fbf9]">
        <div className="flex container mx-auto items-center justify-between gap-4 px-5 py-5 max-lg:flex-col">
          <p className="text-[14px] text-[#657068]">
            বাজার দর — প্রতিদিনের পণ্যের দাম এক নজরে।
          </p>

          <p className="text-right text-[14px] text-[#657068]">
            সকল দাম সপ্তাহভিত্তিক; বাজার অবস্থার ওপর নির্ভর
            করে পরিবর্তিত হয়।
          </p>
        </div>

        <div className="h-[5px] w-full bg-[#222222]" />
      </footer>
    );
};

export default Footer;