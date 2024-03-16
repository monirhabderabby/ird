import Image from "next/image";

const Settings = () => {
  return (
    <div className="w-[330px] bg-white rounded-3xl px-[24px]">
      <div className="w-full flex justify-center">
        <h3 className="pt-[30px] text-xl text-[20px]">Settings</h3>
      </div>
      <div className="border-[1px] border-[rgba(239,239,239,1)] mt-[36px] rounded-lg">
        <div className="bg-[rgba(247,248,250,1)] flex items-center gap-x-3 p-2 border-l-[4px] border-primary">
          <div className="bg-[rgba(232,240,245,1)] flex justify-center items-center w-[40px] h-[40px] rounded-full ">
            <Image
              src="https://duaruqyah.com/assets/sidebar/color/language.svg"
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <p className="text-[14px] text-primary font-medium">
            Language Settings
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-3 p-2 my-[20px]">
          <button className="bg-primary text-white rounded-lg py-2">
            English
          </button>
          <button className="border-[1px] border-[#cccdcf] py-2 rounded-lg hover:border-primary hover:text-primary">
            বাংলা
          </button>
        </div>
      </div>
      <section className="space-y-4 mt-[24px]">
        <div className="bg-[rgba(247,248,250,1)] flex items-center gap-x-3 p-2">
          <div className="bg-[rgba(232,240,245,1)] flex justify-center items-center w-[40px] h-[40px] rounded-full ">
            <Image
              src="https://duaruqyah.com/assets/sidebar/general.svg"
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <p className="text-[14px] text-[#868686] font-medium">
            General Settings
          </p>
        </div>
        <div className="bg-[rgba(247,248,250,1)] flex items-center gap-x-3 p-2">
          <div className="bg-[rgba(232,240,245,1)] flex justify-center items-center w-[40px] h-[40px] rounded-full ">
            <Image
              src="https://duaruqyah.com/assets/sidebar/font.svg"
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <p className="text-[14px] text-[#868686] font-medium">
            Font Settings
          </p>
        </div>
        <div className="bg-[rgba(247,248,250,1)] flex items-center gap-x-3 p-2">
          <div className="bg-[rgba(232,240,245,1)] flex justify-center items-center w-[40px] h-[40px] rounded-full ">
            <Image
              src="https://duaruqyah.com/assets/sidebar/font.svg"
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <p className="text-[14px] text-[#868686] font-medium">
            Appearance Settings
          </p>
        </div>
      </section>
    </div>
  );
};

export default Settings;
