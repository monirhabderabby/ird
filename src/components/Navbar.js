import { Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full pl-[130px] pr-[50px]  h-[80px] mt-4 flex items-center justify-between">
      <h3 className="text-2xl text-black">Duas Page</h3>
      <div className="w-[350px] h-[50px] bg-white rounded-lg flex p-2">
        <input
          className="outline-0 h-full w-full"
          placeholder="Search By dua name"
        />
        <div className="h-full p-2 flex justify-center items-center bg-slate-200">
          <Search />
        </div>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dzlrpspps/image/upload/v1700392817/profile_bq4fpi.jpg"
          height={50}
          width={50}
          alt="profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
