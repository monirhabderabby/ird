"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const getData = async (id) => {
  const res = await fetch(`${process.env.backend}/subcategories/${id}`);

  return res.json();
};

const Category = async ({ name, no_of_dua, no_of_subcat, id }) => {
  const [isOpen, setOpen] = useState(true);

  const data = await getData(id);

  return (
    <div>
      <div
        className={`hover:bg-[#E8F0F5] rounded-xl p-[12px] flex gap-x-2 z-50 cursor-pointer ${
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
          <h3 className="text-black font-semibold text-[14px]">{name}</h3>
          <span className="text-[12px] text-slate-400">
            Subcategory: {no_of_subcat}
          </span>
        </div>
        <div>
          <h3 className="text-black font-semibold text-[14px]">{no_of_dua}</h3>
          <span className="text-[12px] text-slate-400">Duas</span>
        </div>
      </div>
      {isOpen && (
        <section className="p-[12px] space-y-3 pl-[25px]">
          {data.map(({ subcat_name_en, id }) => (
            <Link href="/duas/important?cat=1" key={id}>
              <p className="text-[14px] text-gray-400 my-2 hover:text-black">
                -{subcat_name_en}
              </p>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
};

export default Category;
