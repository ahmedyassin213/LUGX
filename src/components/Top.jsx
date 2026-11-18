import TopCard from "./TopCard";

const games = [
  { name: "Assasin Creed", img: "/top-1.jpg" },
  { name: "Assasin Creed", img: "/top-2.jpg" },
  { name: "Assasin Creed", img: "/top-3.jpg" },
  { name: "Assasin Creed", img: "/top-4.jpg" },
  { name: "Assasin Creed", img: "/top-5.jpg" },
  { name: "Assasin Creed", img: "/top-6.jpg" },
];

const Top = () => {
  return (
    <section className="rounded-[60px] bg-[#f7f7f7] px-6 py-16 font-['Poppins',sans-serif] sm:px-[50px] lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        {/* header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <span className="text-base font-semibold uppercase text-[#ee626b]">
              Top Games
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#1f272b] sm:text-5xl lg:text-[56px]">
              Most Played
            </h2>
          </div>

          <button
            type="button"
            className="rounded-full bg-[#ee626b] px-8 py-4 text-base font-semibold uppercase text-white transition hover:bg-[#e04a54]"
          >
            View all
          </button>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 md:grid-cols-3 xl:mt-16 xl:grid-cols-6">
          <TopCard name="Assasian's Creed" img="..\..\public\trending-01.jpg"></TopCard>
          <TopCard name="Assasian's Creed" img="..\..\public\trending-01.jpg"></TopCard>
          <TopCard name="Assasian's Creed" img="..\..\public\trending-01.jpg"></TopCard>
          <TopCard name="Assasian's Creed" img="..\..\public\trending-01.jpg"></TopCard>
          <TopCard name="Assasian's Creed" img="..\..\public\trending-01.jpg"></TopCard>
          <TopCard name="Assasian's Creed" img="..\..\public\trending-01.jpg"></TopCard>
        </div>
      </div>
    </section>
  );
};

export default Top;