import Link from "next/link";

const SubCategoriesList = ({ data, isOpen, catId }) => {
  return (
    <div>
      {isOpen && (
        <section className="p-[12px] space-y-3 pl-[25px]">
          {data.map(({ subcat_name_en, id }) => (
            <Link href={`/duas/${catId}`} key={id}>
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

export default SubCategoriesList;
