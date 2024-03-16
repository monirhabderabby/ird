import Image from "next/image";

const DuaCard = ({
  dua_name_en,
  index,
  top_en,
  dua_arabic,
  transliteration_en,
  translation_en,
  refference_en,
}) => {
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
          {index}. {dua_name_en}{" "}
        </p>
      </div>
      <p className="mt-5 text-[18px] text-[#000000]">{top_en}</p>
      {dua_arabic && <p className="text-right mt-4">{dua_arabic}</p>}
      {transliteration_en && (
        <p className="italic mt-4">
          <span className="font-medium">Transliteration</span>:{" "}
          {transliteration_en}
        </p>
      )}
      {translation_en && (
        <p className="mt-4">
          <span className="font-medium">Translation: </span>
          {translation_en}
        </p>
      )}
      <p className="mt-[20px] text-primary text-[18px] font-medium">
        Reference:
      </p>
      {refference_en && (
        <p className="text-[18px] font-medium">{refference_en}</p>
      )}
    </section>
  );
};

export default DuaCard;
