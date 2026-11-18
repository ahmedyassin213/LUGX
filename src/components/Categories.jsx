import CategoryCard from "./CategoryCard";

const categories = [
  { name: "Action", img: "/category-1.jpg" },
  { name: "Action", img: "/category-2.jpg" },
  { name: "Action", img: "/category-3.jpg" },
  { name: "Action", img: "/category-4.jpg" },
  { name: "Action", img: "/category-5.jpg" },
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 font-['Poppins',sans-serif] sm:px-10 lg:px-[140px] lg:py-28">
      {/* header */}
      <div className="text-center">
        <span className="text-base font-semibold uppercase text-[#ee626b]">
          Categories
        </span>
        <h2 className="mt-3 text-4xl font-bold text-[#1f272b] sm:text-5xl lg:text-[56px]">
          Top Categories
        </h2>
      </div>

      {/* cards */}
      <div className="mt-12 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 md:grid-cols-3 xl:mt-16 xl:grid-cols-5 xl:gap-[30px]">
        <CategoryCard name="Action" img="..\..\public\trending-02.jpg"></CategoryCard>
        <CategoryCard name="Action" img="..\..\public\trending-02.jpg"></CategoryCard>
        <CategoryCard name="Action" img="..\..\public\trending-02.jpg"></CategoryCard>
        <CategoryCard name="Action" img="..\..\public\trending-02.jpg"></CategoryCard>
        <CategoryCard name="Action" img="..\..\public\trending-02.jpg"></CategoryCard>
      </div>
    </section>
  );
};

export default Categories;