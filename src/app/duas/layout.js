import Categories from "./_components/Categories";

const getData = async () => {
  const res = await fetch(`${process.env.backend}/categories`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

export default async function DuasLayout({ children }) {
  const data = await getData();
  return (
    <div>
      <section className="flex flex-1 space-x-[30px]">
        <div className="w-[350px]">
          <Categories data={data} />
        </div>
        <div className="flex-1">{children}</div>
      </section>
    </div>
  );
}
