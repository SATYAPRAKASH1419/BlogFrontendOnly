import { Appbar } from "../components/Appbar";


// Main App component
function LandingPage() {
    return (
        // Apply Inter font using a global style or Tailwind config
        // Assuming 'Inter' is configured in tailwind.config.js or imported globally.
        // For demonstration, we'll ensure a generic sans-serif fallback if not.
        <div className="font-sans text-gray-900 antialiased">
            {/* Header Section */}
            <div className="sticky top-0 z-50  bg-white/30 backdrop-blur-md">
                               <Appbar />
                             </div>

            {/* Hero Section - Background changed to white, text color adjusted */}
            <section className="bg-white py-20 md:py-32 text-center text-gray-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        A Place to Write, Read, and Connect
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90">
                        Discover stories, thinking, and expertise from writers on any topic.
                    </p>
                    {/* Button styling remains the same for contrast */}
                    <a href="/signup" className="bg-gray-900 inline-block px-8 py-3 rounded-full text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">One Click and Start Reading</a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Medium?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature Card 1: Write Your Story */}
                        <div className="bg-white p-8 rounded-lg shadow-xl text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                            <svg className="w-12 h-12 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                            <h3 className="text-xl font-semibold mb-4">Write Your Story</h3>
                            <p className="text-gray-700">Share your ideas, experiences, and expertise with a global audience. Our intuitive editor makes writing a joy.</p>
                        </div>
                        {/* Feature Card 2: Read Diverse Perspectives */}
                        <div className="bg-white p-8 rounded-lg shadow-xl text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                            <svg className="w-12 h-12 text-blue-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            <h3 className="text-xl font-semibold mb-4">Read Diverse Perspectives</h3>
                            <p className="text-gray-700">Explore millions of articles on countless topics, from technology to personal growth, written by passionate individuals.</p>
                        </div>
                        {/* Feature Card 3: Connect with a Community */}
                        <div className="bg-white p-8 rounded-lg shadow-xl text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
                            <svg className="w-12 h-12 text-purple-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m0 0l3-3m-3 3l-3-3m3 3v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"></path>
                            </svg>
                            <h3 className="text-xl font-semibold mb-4">Connect with a Community</h3>
                            <p className="text-gray-700">Engage with writers and readers through comments, highlights, and discussions. Build your network.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gray-800 py-16 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join millions of readers and writers on Medium. It's free to sign up and start exploring.
                    </p>
                    <a href="/signup" className="bg-green-500 inline-block px-8 py-3 rounded-full text-white font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Get Started - It's Free</a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 py-8 text-gray-400 text-center text-sm">
                <div className="container mx-auto px-4">
                    <p>&copy; 2024 Medium. All rights reserved.</p>
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

export default LandingPage;
