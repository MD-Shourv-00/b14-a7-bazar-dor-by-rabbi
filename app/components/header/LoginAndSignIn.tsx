import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

const LoginAndSignIn = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div>
      <div className="flex items-center gap-8">
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className=" max-md:hidden flex gap-7 items-center">
          <Link href="/sign-in">
            <button className="cursor-pointer text-[16px] font-semibold text-[#202020] transition hover:text-[#008C45]">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="cursor-pointer rounded-[10px] bg-[#008C45] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_3px_5px_rgba(0,0,0,0.25)] transition hover:bg-[#007a3d]">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignIn;