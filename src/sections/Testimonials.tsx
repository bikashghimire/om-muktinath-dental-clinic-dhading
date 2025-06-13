import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16 px-4 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
            <p className="text-lg mb-8">
                Hear what our patients have to say about their experience at Smile Dental Clinic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">John Doe</h3>
                    <p>"The team at Smile Dental Clinic is fantastic! They made me feel comfortable and cared for during my visit."</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                    <p>"I love my new smile! The cosmetic dentistry services are top-notch."</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
