import TrendingCard from "./TrendingCard";

const games = [
  { name: "Assasin Creed", img: "/trending-1.jpg", price: 20, oldPrice: 28 },
  { name: "Assasin Creed", img: "/trending-2.jpg", price: 44 },
  { name: "Assasin Creed", img: "/trending-3.jpg", price: 44, oldPrice: 64 },
  { name: "Assasin Creed", img: "/trending-4.jpg", price: 32 },
];

const Trending = () => {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 font-['Poppins',sans-serif] sm:px-10 lg:px-[50px] lg:py-24">
      {/* header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <span className="text-base font-semibold uppercase text-[#ee626b]">
            Trending
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#1f272b] sm:text-5xl lg:text-[56px]">
            Trending Games
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
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        <TrendingCard name="Assasian's creed" price="20" oldPrice="30" img="..\..\public\trending-01.jpg"></TrendingCard>
        <TrendingCard name="Assasian's creed" price="20" oldPrice="30" img="..\..\public\trending-02.jpg"></TrendingCard>
        <TrendingCard name="Assasian's creed" price="20" oldPrice="30" img="..\..\public\trending-03.jpg"></TrendingCard>
        <TrendingCard name="Assasian's creed" price="20" oldPrice="30" img="..\..\public\trending-04.jpg"></TrendingCard>
      </div>
    </section>
  );
};

export default Trending;