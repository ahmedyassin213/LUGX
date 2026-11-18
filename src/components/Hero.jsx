

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-b-[60px] bg-[#0070ff] font-['Poppins',sans-serif] text-white">
      {/* big darker curved shape on the left */}
      <div className="pointer-events-none absolute -left-[35%] -top-[20%] h-[160%] w-[100%] rounded-full bg-[#0066f5] max-lg:hidden" />

      <div className="relative mx-auto flex min-h-[880px] max-w-[1400px] flex-col items-center justify-between gap-16 px-6 py-20 sm:px-10 lg:min-h-[880px] lg:flex-row lg:px-[140px] lg:py-0">
        {/* LEFT */}
        <div className="heroLeft w-full max-w-[800px] lg:w-[55%]">
          <span className="block text-xl font-medium uppercase tracking-wide sm:text-2xl">
            Welcome to lugx
          </span>

          <h1 className="mt-8 text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-[64px]">
            Best{" "}
            <span className="relative inline-block">
              Gaming
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 250 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9 C 60 2, 190 2, 248 7"
                  stroke="#ee626b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            site ever!
          </h1>

          <p className="mt-12 max-w-[800px] text-base leading-[35px] sm:text-[17px]">
            LUGX Gaming is free React and TailwindCSS website template for your
            gaming websites. You can download and use this layout for commercial
            purposes. Please tell your friends about Ahmed Yassin.
          </p>

          {/* search */}
          <div className="mt-20 flex h-[62px] w-full max-w-[562px] overflow-hidden rounded-full bg-white">
            <input
              type="text"
              placeholder="Type Something"
              className="min-w-0 flex-1 bg-transparent px-8 text-lg text-gray-600 outline-none placeholder:text-gray-500"
            />
            <button
              type="button"
              className="rounded-full bg-[#ee626b] px-6 text-base font-semibold uppercase text-white transition hover:bg-[#e04a54] sm:px-8 sm:text-lg"
            >
              Search now
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="heroRight relative w-full max-w-[420px] shrink-0 sm:max-w-[480px] lg:w-[520px] lg:max-w-none">
          <div className="relative aspect-[520/634] overflow-hidden rounded-[40px] bg-white">
            <img
              src="/heroimg.jpg"
              alt="Featured game"
              className="h-full w-full object-cover"
            />
          </div>

          {/* price badge */}
          <span className="absolute right-6 top-6 rounded-full bg-[#0070ff] px-5 py-2 text-2xl font-bold sm:right-[25px] sm:top-[25px] sm:px-6 sm:py-3">
            $22
          </span>

          {/* discount badge */}
          <span className="absolute -bottom-10 -left-6 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#ee626b] text-3xl font-bold sm:-left-[30px] sm:h-[125px] sm:w-[125px] sm:text-4xl">
            -40%
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;