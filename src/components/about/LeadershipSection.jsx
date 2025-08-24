import React from 'react';

const LeadershipSection = () => {
  const leadership = [
    {
      name: "Saikat Ghosh",
      role: "Strategy",
      image: "/images/team/saikat-ghosh.jpg"
    },
    {
      name: "Charles Mason", 
      role: "Consulting",
      image: "/images/team/charles-mason.jpg"
    },
    {
      name: "Sam Ghosh",
      role: "Operations", 
      image: "/images/team/sam-ghosh.jpg"
    },
    {
      name: "Sean Linehan",
      role: "Growth",
      image: "/images/team/sean-linehan.jpg"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Meet Our Leadership
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-48 h-64 object-cover rounded-lg mx-auto shadow-lg"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDMwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Qjk5OUIiLz4KPHBhdGggZD0iTTEwMCAyNTBDMTAwIDIyMC43IDEyMi4zIDIwMCAxNTAgMjAwUzIwMCAyMjAuNyAyMDAgMjUwVjI4MEgxMDBWMjUwWiIgZmlsbD0iIzlCOUI5QiIvPgo8L3N2Zz4=';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
              <p className="text-blue-200">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
