import Category from "@/components/Cards/Category";
import { Search } from "lucide-react";

const Categories = ({ data }) => {
  return (
    <div className="relative h-[calc(100vh-130px)] bg-white rounded-3xl ">
      <section className="relative">
        <div className="w-full bg-primary rounded-t-3xl flex justify-center items-center text-white/90 text-[16px] font-normal h-[60px]">
          Categories
        </div>
        <div className="border-[1px] h-[40px] border-gray-200 shadow-sm mt-4 mx-2 flex">
          <div className="relative top-0 left-0 h-full w-[60px] flex justify-center items-center">
            <Search />
          </div>
          <input
            className="outline-none  h-full w-full px-2"
            placeholder="Search Categories"
          />
        </div>
      </section>
      <section className="h-[calc(100vh-250px)] rounded-b-3xl overflow-y-auto p-2">
        {data.map(({ id, cat_name_en, no_of_dua, no_of_subcat }) => (
          <Category
            key={id}
            name={cat_name_en}
            no_of_dua={no_of_dua}
            no_of_subcat={no_of_subcat}
            id={id}
          />
        ))}
      </section>
      {/* <section className="h-[calc(100vh-250px)] rounded-b-3xl overflow-y-auto p-2">
        <Link href="/duas/2">
          <div className="hover:bg-[#E8F0F5] rounded-xl p-[12px] flex gap-x-2 z-50 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700392817/profile_bq4fpi.jpg"
              height={56}
              width={56}
              alt="icon"
              className="rounded-xl"
            />
            <div className="flex flex-col flex-1">
              <h3 className="text-black font-semibold text-[14px]">Name</h3>
              <span className="text-[12px] text-slate-400">Subcategory: 7</span>
            </div>
            <div>
              <h3 className="text-black font-semibold text-[14px]">21</h3>
              <span className="text-[12px] text-slate-400">Duas</span>
            </div>
          </div>
        </Link>
      </section> */}
    </div>
  );
};

export default Categories;
