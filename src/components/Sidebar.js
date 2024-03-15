import Image from "next/image";
import Link from "next/link";
import home from "../../public/icons/Home.png";

const Sidebar = () => {
  const navlinks = [
    {
      id: 1,
      title: "Home",
      icon: home,
      href: "/",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center ">
        <Image src="/logo.png" height={70} width={70} alt="logo" />
      </div>
      <div className="w-full  px-2 flex flex-col items-center justify-center">
        <Link href="/">
          <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
            <Image
              src="https://duaruqyah.com/assets/nav/home.svg"
              height={20}
              width={20}
              alt="icon"
            />
          </div>
        </Link>
        <Link href="/duas">
          <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
            <Image
              src="https://duaruqyah.com/assets/nav/alldua.svg"
              height={20}
              width={20}
              alt="icon"
            />
          </div>
        </Link>
        <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
          <Image
            src="https://duaruqyah.com/assets/nav/memorize.svg"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
          <Image
            src="https://duaruqyah.com/assets/nav/bookmark.svg"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
          <Image
            src="https://duaruqyah.com/assets/nav/ruqyah.svg"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
          <Image
            src="https://duaruqyah.com/assets/nav/dua-info.svg"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <div className="flex justify-center h-[50px] w-[50px] items-center hover:bg-slate-200 rounded-full">
          <Image
            src="https://duaruqyah.com/assets/nav/books.svg"
            height={20}
            width={20}
            alt="icon"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Image src="/donate_icon.png" height={70} width={70} alt="logo" />
      </div>
    </div>
  );
};

export default Sidebar;
