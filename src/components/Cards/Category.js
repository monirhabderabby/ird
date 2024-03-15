"use client";
import Image from "next/image";
import { useState } from "react";

const Category = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="">
        <div
          className={`hover:bg-[#E8F0F5] rounded-xl p-[12px] flex gap-x-2 cursor-pointer ${
            isOpen ? "bg-[#E8F0F5]" : "bg-white"
          }`}
          onClick={() => setOpen(!isOpen)}
        >
          <Image
            src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700392817/profile_bq4fpi.jpg"
            height={56}
            width={56}
            alt="icon"
            className="rounded-xl"
          />
          <div className="flex flex-col flex-1">
            <h3 className="text-black font-semibold text-[14px]">
              Dua's Importance
            </h3>
            <span className="text-[12px] text-slate-400">Subcategory: 7</span>
          </div>
          <div>
            <h3 className="text-black font-semibold text-[14px]">21</h3>
            <span className="text-[12px] text-slate-400">Duas</span>
          </div>
        </div>
        {isOpen && (
          <section className="p-[12px] space-y-2">
            <p className="text-[14px] text-gray-400">Sub category 1</p>
            <p className="text-[14px] text-gray-400">Sub category 1</p>
            <p className="text-[14px] text-gray-400">Sub category 1</p>
            <p className="text-[14px] text-gray-400">Sub category 1</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Category;
