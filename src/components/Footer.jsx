const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden rounded-t-[80px] bg-[#0070ff] font-['Poppins',sans-serif] text-white sm:rounded-t-[140px] lg:mt-24 lg:rounded-t-[200px]">
      {/* soft lighter shapes on the right, like the template */}
      <div className="pointer-events-none absolute -right-[10%] top-0 h-full w-[55%] -skew-x-[30deg] bg-[#0083fb] max-md:hidden" />
      <div className="pointer-events-none absolute right-[8%] top-0 h-full w-[35%] -skew-x-[30deg] bg-[#0088ff]/60 max-md:hidden" />

      <div className="relative mx-auto flex min-h-[190px] max-w-[1400px] flex-col items-center justify-start gap-2 px-6 pb-16 pt-12 text-center text-base sm:flex-row sm:justify-center sm:gap-6 sm:pt-[44px] sm:text-lg lg:min-h-[190px] lg:text-xl">
        <p>Copyright © 2048 LUGX Gaming Company. All rights reserved.</p>
        <p>Design: Ahmed Yassin</p>
      </div>
    </footer>
  );
};

export default Footer;