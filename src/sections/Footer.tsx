import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-4">
            <div className="max-w-5xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Smile Dental Clinic. All rights reserved@2025</p>
            </div>
        </footer>
    );
};

export default Footer;
