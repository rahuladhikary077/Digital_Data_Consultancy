import React from "react";

const team = [
  { name: "Saikat Ghosh", role: "Strategy", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "Charles Mason", role: "Consulting", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sam Ghosh", role: "Operations", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Sean Linehan", role: "Growth", image: "https://randomuser.me/api/portraits/men/56.jpg" },
];

const Avatar = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.src = "https://source.unsplash.com/200x200/?business,leader";
    }}
  />
);

const Card = ({ m }) => (
  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10 hover:shadow-indigo-500/30 transition duration-500 group">
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-indigo-400/60 group-hover:ring-purple-500/70 transition">
      <Avatar src={m.image} alt={m.name} />
    </div>
    <h3 className="text-xl font-bold text-center text-white">{m.name}</h3>
    <p className="text-indigo-300 text-center font-medium">{m.role}</p>
  </div>
);

const LeadershipSlider = () => {
  const track = [...team, ...team];

  return (
    <section className="py-16 relative bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#0b1020] text-white overflow-hidden">
      <style>{`
        @keyframes ddc-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ddc-marquee { overflow: hidden; position: relative; }
        .ddc-track { display: flex; gap: 1rem; width: max-content; animation: ddc-marquee 28s linear infinite; }
        @media (hover:hover) { .ddc-marquee:hover .ddc-track { animation-play-state: paused; } }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Meet Our Leadership
        </h2>

        {/* MOBILE: infinite slider */}
        <div className="block md:hidden">
          <div className="ddc-marquee"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}>
            <div className="ddc-track">
              {track.map((m, i) => (
                <div key={i} className="shrink-0 w-64">
                  <Card m={m} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Card key={i} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSlider;
