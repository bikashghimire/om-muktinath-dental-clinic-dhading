import React from "react";

const Contact = () => {
    return (
        <section className="py-16 px-4 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg mb-6">
                Have questions or need to book an appointment? We're here to help!
            </p>
            <form className="max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 mb-4 border rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-2 mb-4 border rounded h-32"
                ></textarea>
                <button
                    type="submit"
                    className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}
export default Contact;