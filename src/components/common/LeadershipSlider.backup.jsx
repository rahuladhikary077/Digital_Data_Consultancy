import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const team = [
  { name: "Saikat Ghosh", role: "Strategy", image: "/images/team/saikat-ghosh.jpg" },
  { name: "Charles Mason", role: "Consulting", image: "/images/team/charles-mason.jpg" },
  { name: "Sam Ghosh", role: "Operations", image: "/images/team/sam-ghosh.jpg" },
  { name: "Sean Linehan", role: "Growth", image: "/images/team/sean-linehan.jpg" },
];

const LeadershipSlider = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* Futuristic glow background */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Meet Our Leadership
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          loopedSlides={team.length}
          slidesPerView="auto"
          spaceBetween={30}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3500} // smooth continuous scrolling
          pagination={{ clickable: true }}
          navigation={true}
          className="pb-12"
        >
          {team.map((m, i) => (
            <SwiperSlide key={i} className="!w-72">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:scale-105 hover:shadow-indigo-500/40 transition duration-500 group border border-white/10">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>

                {/* Avatar */}
                <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-400 shadow-xl group-hover:border-purple-500 transition">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-center">{m.name}</h3>
                <p className="text-indigo-300 text-center font-medium">{m.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LeadershipSlider;
