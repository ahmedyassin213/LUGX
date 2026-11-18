const TrendingCard = ({ name, img, category = "Action", price, oldPrice }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-[40px] bg-[#f1f0f0] font-['Poppins',sans-serif]">
      {/* image + price badge */}
      <div className="relative aspect-[382/281] w-full">
        <img
          src={img}
          alt={name}
          className="h-full w-full rounded-[40px] object-cover"
        />
        <div className="absolute right-6 top-6 flex flex-col items-center rounded-2xl bg-[#0070ff] px-4 py-2 text-center font-bold leading-tight text-white sm:px-5">
          {oldPrice && (
            <span className="text-base line-through sm:text-lg">${oldPrice}</span>
          )}
          <span className="text-xl sm:text-2xl">${price}</span>
        </div>
      </div>

      {/* info */}
      <div className="flex items-center justify-between px-8 py-7">
        <div>
          <span className="block text-base text-gray-500">{category}</span>
          <h4 className="mt-1 text-xl font-semibold text-[#1f272b]">{name}</h4>
        </div>

        <button
          type="button"
          aria-label={`Add ${name} to cart`}
          className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#ee626b] transition hover:bg-[#e04a54]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M7 8V7a5 5 0 0 1 10 0v1h2.2a1 1 0 0 1 1 1.1l-1.1 11a2 2 0 0 1-2 1.9H6.9a2 2 0 0 1-2-1.9l-1.1-11a1 1 0 0 1 1-1.1H7Zm2 0h6V7a3 3 0 0 0-6 0v1Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;