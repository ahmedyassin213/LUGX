const CategoryCard = ({ name, img }) => {
  return (
    <div className="overflow-hidden rounded-[30px] bg-[#0070ff] font-['Poppins',sans-serif]">
      <h4 className="py-5 text-center text-xl font-semibold text-white">
        {name}
      </h4>
      <div className="aspect-[300/281] w-full overflow-hidden rounded-[30px]">
        <img src={img} alt={name} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default CategoryCard;