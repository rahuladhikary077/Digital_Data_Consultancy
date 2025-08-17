import React, { useState, useEffect } from 'react';

const EnhancedCybersecuritySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const cybersecurityImages = [
    {
      src: '/images/img_placeholder_image_1.png',
      alt: 'Cybersecurity shield protection',
      caption: 'Advanced threat detection systems'
    },
    {
      src: '/images/img_banner_gradients.png',
      alt: 'Data encryption visualization',
      caption: 'End-to-end encryption protocols'
    },
    {
      src: '/images/img_gradient.png',
      alt: 'Network security architecture',
      caption: 'Zero-trust security framework'
    },
    {
      src: '/images/img_placeholder_image_2.png',
      alt: 'Digital security monitoring',
      caption: '24/7 security operations center'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % cybersecurityImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const assignments = [
    {
      title: "Risk Assessment & Analysis",
      description: "Conduct comprehensive security audits to identify vulnerabilities in your data infrastructure",
      icon: "🔍"
    },
    {
      title: "Data Protection Strategy",
      description: "Develop robust encryption and backup strategies for sensitive business data",
      icon: "🔐"
    },
    {
      title: "Compliance Framework",
      description: "Ensure GDPR, HIPAA, and industry-specific regulatory compliance",
      icon: "📋"
    },
    {
      title: "Incident Response Plan",
      description: "Create detailed response protocols for security breaches and data incidents",
      icon: "🚨"
    },
    {
      title: "Employee Training Program",
      description: "Implement cybersecurity awareness training for all staff members",
      icon: "👥"
    },
    {
      title: "Continuous Monitoring",
      description: "Deploy real-time threat detection and automated response systems",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cybersecurity in the Data-Driven Era
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Protect your digital assets with cutting-edge security solutions designed for modern data challenges. 
            In an era where data drives every decision, cybersecurity isn't optional—it's essential for survival.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={cybersecurityImages[currentImage].src}
                alt={cybersecurityImages[currentImage].alt}
                className="w-full h-96 object-cover transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {cybersecurityImages[currentImage].caption}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Advanced security measures for data protection
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {cybersecurityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Threat Detection</h3>
            <p className="text-gray-600">
              AI-powered systems that identify and neutralize threats before they impact your operations
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600">
              Military-grade encryption protecting data at rest, in transit, and in processing
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Zero-Trust Architecture</h3>
            <p className="text-gray-600">
              Never trust, always verify - comprehensive security for every user, device, and network
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Monitoring</h3>
            <p className="text-gray-600">
              24/7 surveillance with instant alerts and automated response mechanisms
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Management</h3>
            <p className="text-gray-600">
              Automated compliance tracking for GDPR, HIPAA, SOX, and industry-specific regulations
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Incident Response</h3>
            <p className="text-gray-600">
              Rapid response teams and automated systems to minimize impact and recovery time
            </p>
          </div>
        </div>

        {/* Assignments Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Security Assignments
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assignments.map((assignment, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <div className="text-3xl mb-3">{assignment.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {assignment.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {assignment.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Digital Future?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait for a breach to happen. Take proactive steps to protect your data assets today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
              Schedule Security Assessment
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Download Security Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCybersecuritySection;
