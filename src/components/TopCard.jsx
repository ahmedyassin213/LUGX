const TopCard = ({ name, img, category = "Adventure" }) => {
  return (
    <div className="group flex flex-col items-center rounded-[30px] bg-white pb-6 text-center font-['Poppins',sans-serif]">
      <div className="aspect-square w-full overflow-hidden rounded-[30px]">
        <img src={img} alt={name} className="h-full w-full object-cover" />
      </div>

      <span className="mt-5 text-base text-gray-500">{category}</span>
      <h4 className="mt-1 px-2 text-xl font-semibold text-[#1f272b] transition-colors group-hover:text-[#0070ff]">
        {name}
      </h4>

      <button
        type="button"
        className="mt-5 rounded-full bg-[#ee626b] px-7 py-3 text-base font-semibold uppercase text-white transition-colors group-hover:bg-[#0070ff]"
      >
        Explore
      </button>
    </div>
  );
};

export default TopCard;