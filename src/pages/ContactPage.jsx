import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import MapSection from '../components/MapSection';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#02101F] via-[#0E1B2B] to-[#191122] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center py-16 lg:py-24">
            <div className="lg:col-span-7">
              <h1 className="font-[Poppins] font-extrabold text-white leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                We look forward
                <br />
                to hearing
                <br />
                from you
              </h1>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8 mt-8 lg:mt-0">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 lg:mb-8">
              We are always ready to help you and answer your questions
            </h2>
            <ContactInfo />
          </div>
          <aside className="lg:col-span-5">
            <div className="p-6 lg:p-8 bg-white rounded-lg shadow-lg">
              <MapSection />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
