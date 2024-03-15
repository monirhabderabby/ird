import Category from "@/components/Cards/Category";
import { Search } from "lucide-react";

const Categories = () => {
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
        <Category />
        <Category />
        <Category />
        <Category />
      </section>
    </div>
  );
};

export default Categories;
