import Image from "next/image";

const DuaCard = () => {
  return (
    <section className="w-full bg-white rounded-2xl mt-6 p-[24px]">
      <div className="flex items-center gap-x-4">
        <Image
          src="https://duaruqyah.com/assets/duacard.svg"
          alt="icon"
          height={35}
          width={35}
        />
        <p className="text-[16px] text-primary">
          {1}. The servent of dependent on his lord #1{" "}
        </p>
      </div>
      <p className="mt-5 text-[18px] text-[#000000]">
        All human beings depend on Allah for their welfare and prevention of
        evil in various matters of their religion and world. Allah says
        (interpretation of the meaning): O mankind, you are those in need of
        Allah, while Allah is the Free of need, the Praiseworthy.
      </p>
      <p className="mt-[20px] text-primary text-[18px] font-medium">
        Reference:
      </p>
      <p className="text-[18px] font-medium">Bukhari: 844</p>
    </section>
  );
};

export default DuaCard;
