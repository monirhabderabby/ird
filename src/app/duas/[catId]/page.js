import DuaCard from "@/components/Cards/DuaCard";

const getData = async (id) => {
  const res = await fetch(`${process.env.backend}/duasByCategory/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const categoryId = params.catId;
  const data = await getData(categoryId);

  return (
    <div>
      <div className="flex-1 overflow-y-auto h-[calc(100vh-130px)]">
        <section>
          <div className="bg-white px-5 py-4 rounded-2xl">
            <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush">
              <span className="text-primary  font-medium leading-[25px] text-mss style-Kalpurush">
                Section:{" "}
              </span>
              The servant is dependent on his Lord {params.catId}
            </p>
          </div>
        </section>
        <div>
          {data.map(
            ({
              id,
              dua_name_en,
              top_en,
              dua_arabic,
              transliteration_en,
              translation_en,
              refference_en,
            }) => (
              <DuaCard
                key={id}
                dua_name_en={dua_name_en}
                index={id}
                top_en={top_en}
                dua_arabic={dua_arabic}
                transliteration_en={transliteration_en}
                translation_en={translation_en}
                refference_en={refference_en}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
