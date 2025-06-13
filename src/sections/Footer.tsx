import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 
"react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Smile Dental Clinic</p>
                        <p className="text-sm opacity-80">All rights reserved</p>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-gray-200 transition-colors"><FaFacebook /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><FaTwitter /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><FaInstagram /></a>
                            <a href="#" className="hover:text-gray-200 transition-colors"><FaLinkedin /></a>
                        </div>
                        <p className="text-sm">
                            Website developed by <a 
                                href="https://bikashdev.com" 
                                className="font-medium underline hover:text-gray-200 transition-colors"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                BikashDev
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
