import DuaCard from "@/components/Cards/DuaCard";

const getData = async () => {
  const res = await fetch(`${process.env.backend}/`);
};

const page = ({ params }) => {
  const categoryId = params.catId;
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
        <DuaCard />
        <DuaCard />
        <DuaCard />
      </div>
    </div>
  );
};

export default page;
