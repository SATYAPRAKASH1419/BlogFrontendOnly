import { Appbar } from "../components/Appbar";


// Main Contactus component for the Contact Us page
function ContactUs() {
    return (
        <div className="font-sans text-gray-900 antialiased">
            {/* Header Section (reused from landing page for consistency) */}
            <div className="sticky top-0 z-50  bg-white/30 backdrop-blur-md">
                               <Appbar />
                             </div>

            {/* Contact Section */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-center text-gray-700 mb-12">
                        Have a question, feedback, or just want to say hello? Fill out the form below or reach us through the provided contact details.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Satya Prakash"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="satyaprakash@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Regarding your recent article..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Additional Contact Info */}
                        <div className="mt-10 text-center text-gray-600">
                            <p className="mb-2">Or connect with us directly:</p>
                            <p className="font-medium">Email: <a href="mailto:support@medium.com" className="text-blue-600 hover:underline">support@medium.com</a></p>
                            <p className="font-medium">Phone: +1 (123) 456-7890</p>
                            <p className="font-medium">Address: 123 Blog Street, Suite 400, Writer City, BL 98765</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section (reused from landing page for consistency) */}
            <footer className="bg-gray-900 py-8 text-gray-400 text-center text-sm">
                <div className="container mx-auto px-4">
                    <p>&copy; 2025 Medium. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="hover:text-white transition duration-200">Cookies Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ContactUs;
