import Categories from "./_components/Categories";

const page = () => {
  return (
    <div>
      <section className="flex flex-1 space-x-[30px]">
        <div className="w-[350px]">
          <Categories />
        </div>
        <div className="flex-1">
          <section>
            <div className="bg-white px-5 py-4 rounded-2xl">
              <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush">
                <span className="text-primary  font-medium leading-[25px] text-mss style-Kalpurush">
                  Section:{" "}
                </span>
                The servant is dependent on his Lord
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default page;
