import React, { useState } from "react";
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt, FaImages } from "react-icons/fa";
import ClinicGallery from "../assets/images/clinic/gallery";
import { clinicImages, getLocationImage } from "../assets/images/clinic/config";
import DummyImageProvider from "../assets/images/clinic/DummyImageProvider";
import LocationComponent from "../assets/images/clinic/LocationComponent";

const Contact = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryCategory, setGalleryCategory] = useState<'exterior'|'interior'|'equipment'|'team'>('exterior');
    
    const openGallery = (category: 'exterior'|'interior'|'equipment'|'team' = 'exterior') => {
        setGalleryCategory(category);
        setIsGalleryOpen(true);
    };
    
    return (
        <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Contact Us</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-4 rounded-full"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Have questions or need to book an appointment? We're here to help!
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    {/* Contact Cards Container */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {/* Opening Hours */}
                        <div className="bg-gradient-to-br from-white to-primary/5 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 group">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <FaClock className="text-primary text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold ml-3 text-gray-800">Opening Hours</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex justify-between text-sm md:text-base">
                                    <span className="text-gray-600">Monday - Friday:</span>
                                    <span className="font-medium text-gray-800">9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between text-sm md:text-base">
                                    <span className="text-gray-600">Saturday:</span>
                                    <span className="font-medium text-gray-800">9:00 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between text-sm md:text-base">
                                    <span className="text-gray-600">Sunday:</span>
                                    <span className="font-medium text-gray-800">Closed</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Phone */}
                        <div className="bg-gradient-to-br from-white to-primary/5 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 group">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <FaPhone className="text-primary text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold ml-3 text-gray-800">Phone</h3>
                            </div>
                            <a href="tel:+9779876543210" className="block text-gray-700 hover:text-primary transition-colors mb-2">+977 9876543210</a>
                            <a href="tel:014567890" className="block text-gray-700 hover:text-primary transition-colors">01-4567890</a>
                        </div>
                        
                        {/* Email */}
                        <div className="bg-gradient-to-br from-white to-primary/5 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 group">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <FaEnvelope className="text-primary text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold ml-3 text-gray-800">Email</h3>
                            </div>
                            <a href="mailto:info@smiledentalclinic.com" className="block text-gray-700 hover:text-primary transition-colors mb-2">info@smiledentalclinic.com</a>
                            <a href="mailto:appointment@smiledentalclinic.com" className="block text-gray-700 hover:text-primary transition-colors">appointment@smiledentalclinic.com</a>
                        </div>
                        
                        {/* Location */}
                        <div className="bg-gradient-to-br from-white to-primary/5 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 group">
                            <div className="flex items-center mb-4">
                                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <FaMapMarkerAlt className="text-primary text-xl" />
                                </div>
                                <h3 className="text-xl font-semibold ml-3 text-gray-800">Location</h3>
                            </div>
                            <p className="text-gray-700 mb-2">Om Muktinath, Syangja</p>
                            <div className="text-gray-700 flex items-center flex-wrap">
                                <span className="text-sm mr-2">GPS: 27.911239, 84.892693</span>
                                <button 
                                    onClick={() => window.open('https://maps.google.com/?q=27.911239,84.892693', '_blank')}
                                    className="text-sm text-primary hover:text-primary-dark transition-colors font-medium flex items-center gap-1 mt-1"
                                    title="Open in Google Maps"
                                >
                                    <FaMapMarkerAlt className="text-xs" /> Open in Maps
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form Preview - Could be expanded in the future */}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl shadow-lg mt-8">
                        <div className="text-center py-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Need to make an appointment?</h3>
                            <p className="text-gray-600 mb-4">Call us or send an email for quick assistance</p>
                            <div className="flex justify-center space-x-4">
                                <a 
                                    href="tel:+9779876543210" 
                                    className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <FaPhone /> Call Now
                                </a>
                                <a 
                                    href="mailto:appointment@smiledentalclinic.com" 
                                    className="px-6 py-2.5 bg-white text-primary border border-primary rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2"
                                >
                                    <FaEnvelope /> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Location & Clinic Photos */}
                <div className="h-full flex flex-col">
                    <div className="rounded-2xl overflow-hidden shadow-xl h-full border-4 border-white transform hover:scale-[1.01] transition-all duration-300 relative bg-gradient-to-br from-primary/5 to-primary/20 p-1.5">
                        {/* Combined Map and Location Image Component */}
                        <LocationComponent locationCoords={{ lat: 27.911239, lng: 84.892693 }} />
                        
                        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between">
                            <a 
                                href="https://maps.google.com/?q=27.911239,84.892693"
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="bg-white/90 backdrop-blur-sm hover:bg-white px-5 py-2.5 rounded-lg shadow-md text-sm font-medium text-primary transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
                            >
                                <FaMapMarkerAlt /> Get Directions
                            </a>
                            <button 
                                onClick={() => {
                                    if (navigator.share) {
                                        navigator.share({
                                            title: 'Om Muktinath Location',
                                            text: 'Check out Om Muktinath location on Google Maps',
                                            url: 'https://maps.google.com/?q=27.911239,84.892693',
                                        })
                                    }
                                }}
                                className="bg-white/90 backdrop-blur-sm hover:bg-white px-5 py-2.5 rounded-lg shadow-md text-sm font-medium text-primary transition-all duration-300 hover:shadow-lg"
                            >
                                Share Location
                            </button>
                        </div>
                    </div>
                    
                    {/* Clinic Photos Gallery Preview */}
                    <div className="mt-6">
                        <button 
                            className="w-full py-3.5 bg-gradient-to-r from-primary/80 to-primary text-white font-medium rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                            onClick={() => openGallery('exterior')}
                        >
                            <FaImages /> View Clinic Photos
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Clinic Gallery Modal */}
            <ClinicGallery 
                isOpen={isGalleryOpen} 
                onClose={() => setIsGalleryOpen(false)} 
                initialCategory={galleryCategory}
            />
        </section>
    );
}

export default Contact;