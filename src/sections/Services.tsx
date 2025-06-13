import React from 'react';
import { FaTooth, FaSmile, FaTeeth, FaUserMd, FaChild, FaFirstAid } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive exams, cleanings, and preventive care.",
      icon: <FaTooth />,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers.",
      icon: <FaSmile />,
    },
    {
      title: "Orthodontics",
      description: "Braces and clear aligners for a straighter smile.",
      icon: <FaTeeth />,
    },
    {
      title: "Oral Surgery",
      description: "Extractions, implants, and other surgical procedures.",
      icon: <FaUserMd />,
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized care for children's dental health.",
      icon: <FaChild />,
    },
    {
      title: "Emergency Care",
      description: "Prompt treatment for dental emergencies.",
      icon: <FaFirstAid />,
    }
  ];
  
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of dental services to meet your needs, from routine check-ups to advanced cosmetic procedures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us today to schedule an appointment and learn more about how we can help you achieve a healthy, beautiful smile!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary/90 to-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Schedule an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;