const Shop = ({ img }) => {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 font-['Poppins',sans-serif] sm:px-10 lg:px-[140px] lg:py-24">
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-0">
        {/* LEFT CARD */}
        <div className="relative z-10 flex flex-col items-start justify-center rounded-[40px] bg-[#f7f7f7] p-8 sm:p-12 lg:min-h-[670px] lg:w-[40.5%] lg:px-[100px] lg:py-[100px]">
          <span className="text-base font-semibold uppercase text-[#ee626b]">
            Our shop
          </span>
          <h2 className="mt-8 text-3xl font-bold leading-tight text-[#1f272b] sm:text-4xl lg:text-[46px] lg:leading-[55px]">
            Go Pre-Order Buy &amp; Get Best{" "}
            <span className="text-[#0070ff]">Prices</span> For You!
          </h2>
          <p className="mt-10 text-lg font-medium leading-[35px] text-gray-600 lg:mt-16 lg:text-xl">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>
          <button
            type="button"
            className="mt-10 rounded-full bg-[#ee626b] px-8 py-4 text-base font-semibold uppercase text-white transition hover:bg-[#e04a54] lg:mt-16"
          >
            Shop now
          </button>
        </div>

        {/* CENTER IMAGE (sits behind both cards on desktop) */}
        <div className="aspect-[687/637] w-full overflow-hidden rounded-[40px] lg:absolute lg:left-1/2 lg:top-0 lg:z-0 lg:aspect-auto lg:h-[637px] lg:w-[42.4%] lg:-translate-x-1/2">
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>

        {/* RIGHT CARD */}
        <div className="relative z-10 flex flex-col items-start justify-center rounded-[40px] bg-[#f7f7f7] p-8 sm:p-12 lg:min-h-[538px] lg:w-[40.5%] lg:px-[75px] lg:py-[100px]">
          <span className="text-base font-semibold uppercase text-[#ee626b]">
            Newsletter
          </span>
          <h2 className="mt-8 text-3xl font-bold leading-tight text-[#1f272b] sm:text-4xl lg:text-[46px] lg:leading-[55px]">
            Get Up To $100 Off Just Buy{" "}
            <span className="text-[#0070ff]">Subscribe</span> Newsletter!
          </h2>

          <div className="mt-10 flex h-[62px] w-full overflow-hidden rounded-full bg-white lg:mt-16">
            <input
              type="email"
              placeholder="Your email..."
              className="min-w-0 flex-1 bg-transparent px-6 text-base text-gray-600 outline-none placeholder:text-gray-500 sm:px-8 sm:text-lg"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-[#ee626b] px-5 text-sm font-semibold uppercase text-white transition hover:bg-[#e04a54] sm:px-8 sm:text-base"
            >
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;