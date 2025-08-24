import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
        alt="Data Technology Background"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://source.unsplash.com/1600x900/?technology,data";
        }}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Empowering Businesses with Data
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          We help companies unlock the power of data to drive insights and growth.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
