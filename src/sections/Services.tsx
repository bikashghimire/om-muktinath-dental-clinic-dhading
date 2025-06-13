import React from 'react';

const Services = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
      <p className="text-lg mb-8">
        We offer a wide range of dental services to meet your needs, from routine check-ups to advanced cosmetic procedures.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-item">
          <h3 className="text-xl font-bold mb-2">General Dentistry</h3>
          <p>Comprehensive exams, cleanings, and preventive care.</p>
        </div>
        <div className="service-item">
          <h3 className="text-xl font-bold mb-2">Cosmetic Dentistry</h3>
          <p>Teeth whitening, veneers, and smile makeovers.</p>
        </div>
        <div className="service-item">
          <h3 className="text-xl font-bold mb-2">Orthodontics</h3>
          <p>Braces and clear aligners for a straighter smile.</p>
        </div>
        <div className="service-item">
          <h3 className="text-xl font-bold mb-2">Oral Surgery</h3>
          <p>Extractions, implants, and other surgical procedures.</p>
        </div>              
        <div className="service-item">
          <h3 className="text-xl font-bold mb-2">Pediatric Dentistry</h3>
          <p>Specialized care for children's dental health.</p>
        </div>
        <div className="service-item">
          <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
          <p>Prompt treatment for dental emergencies.</p>
        </div>
      </div>
      <p className="mt-8">
        Contact us today to schedule an appointment and learn more about how we can help you achieve a healthy, beautiful smile!
      </p>
    </section>
  );
}
export default Services;