const FeatureCard = ({ title, image, color = "bg-[#0070ff]" }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 rounded-[40px] bg-white px-20 py-10 font-['Poppins',sans-serif] shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:py-[43px]">
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28 ${color}`}
      >
        <img src={image} alt="" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
      </div>
      <h3 className="text-center text-lg font-bold uppercase text-[#1f272b] sm:text-xl lg:text-xl">
        {title}
      </h3>
    </div>
  );
};

export default FeatureCard;