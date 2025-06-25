"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftRight, Heart, LogOut, Menu, Search, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow py-5">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className="text-green-600 w-6 h-6" />
            ) : (
              <Menu className="text-green-600 w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-4">
            <Menu className="text-green-600" />
            <Search className="text-green-600 w-5 h-5" />
            <select className="bg-green-600 p-1 rounded-lg border-none text-sm text-white focus:outline-none focus:ring-0">
              <option>Uzb</option>
              <option>Eng</option>
              <option>Rus</option>
            </select>
          </div>
        </div>

        <Link href="/">
          <img src="/Logo.svg" alt="Logo" className="h-[50px] w-[172.06px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/">
              <ArrowLeftRight className="text-green-600" />
            </Link>
          </li>
          <li>
            <Link href="/like">
              <Heart className="text-green-600" />
            </Link>
          </li>
          <li>
            <Link href="/exit">
              <LogOut className="text-green-600" />
            </Link>
          </li>
          <li className="flex flex-col">
            <a
              className="text-[18.5px] font-[700] text-[#49423D]"
              href="tel:88003015051"
            >
              8 (800) 301-50-51
            </a>
            <p className="text-[12px] font-[500] text-[#8DB338]">
              Заказать обратный звонок
            </p>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 px-2">
          <div className="flex items-center gap-3">
            <Search className="text-green-600 w-5 h-5" />
            <select className="bg-green-600 p-1 rounded-xl border-none text-sm text-white focus:outline-none focus:ring-0">
              <option>Uzb</option>
              <option>Eng</option>
              <option>Rus</option>
            </select>
          </div>

          <Link href="/" className="flex items-center gap-2 text-green-600">
            <ArrowLeftRight />
            <span>Asosiy</span>
          </Link>
          <Link href="/like" className="flex items-center gap-2 text-green-600">
            <Heart />
            <span>Yoqtirganlar</span>
          </Link>
          <Link href="/exit" className="flex items-center gap-2 text-green-600">
            <LogOut />
            <span>Chiqish</span>
          </Link>

          <div>
            <a
              className="text-base font-bold text-[#49423D]"
              href="tel:88003015051"
            >
              8 (800) 301-50-51
            </a>
            <p className="text-xs font-bold text-[#8DB338]">
              Заказать обратный звонок
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
