import React from 'react';
import { Appbar } from '../components/Appbar';

// Main App component for the About Us page
function AboutPage() {
    return (
        <div className="font-sans text-gray-900 antialiased">
            {/* Header Section (reused for consistency) */}
            <div className="sticky top-0 z-50  bg-white/30 backdrop-blur-md">
                                           <Appbar />
                                         </div>

            {/* About Us Section */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
                        About Medium
                    </h1>
                    <p className="text-lg text-center text-gray-700 mb-12">
                        Welcome to Medium, your ultimate destination for meaningful content and a vibrant community of readers and writers.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to democratize publishing and provide a platform where anyone can share their stories, ideas, and expertise with the world. We believe in the power of words to inspire, educate, and connect people from all walks of life. We are committed to fostering a supportive and engaging environment where quality content thrives.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Diverse Content:</strong> From in-depth analyses to personal essays, discover millions of articles on every topic imaginable.</li>
                                <li><strong>Passionate Community:</strong> Connect with fellow readers and writers, engage in discussions, and find your tribe.</li>
                                <li><strong>Intuitive Publishing:</strong> Our user-friendly editor makes it easy for anyone to craft beautiful and impactful stories.</li>
                                <li><strong>Thought-Provoking Ideas:</strong> Access unique perspectives and insights from experts and enthusiasts worldwide.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Founded in 2024, Medium was born out of a simple idea: that great stories and ideas should be accessible to everyone. We started as a small team with a big vision, and thanks to our incredible community, we've grown into a leading platform for online publishing. We are continuously evolving, driven by our dedication to quality, innovation, and community.
                            </p>
                        </div>

                        {/* Updated Section: Connect With Us - emojis removed */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Have a question, suggestion, or just want to say hello? We’d love to hear from you! Whether it’s feedback about an article, a collaboration opportunity, or a technical issue — feel free to reach out. We value every message and aim to respond as soon as possible.
                            </p>

                            <div className="space-y-4 mb-6">
                                {/* General Inquiries */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">General Inquiries</h3>
                                    <p className="text-gray-700">Email: <a href="mailto:satyaprakashswain.work@gmail.com" className="text-blue-600 hover:underline">satyaprakashswain.work@gmail.com</a></p>
                                    <p className="text-gray-700">Phone (optional): +91-XXXXXXXXXX</p>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                                        <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                                        <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                                    </div>
                                </div>

                                {/* Collaborations & Guest Posts */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborations & Guest Posts</h3>
                                    <p className="text-gray-700 mb-2">Are you a writer, developer, or tech enthusiast who wants to contribute?</p>
                                    <p className="text-gray-700">Drop your pitch or article idea at: <br/><a href="mailto:collab.medium@satyaprakashswain.dev" className="text-blue-600 hover:underline">collab.medium@satyaprakashswain.dev</a></p>
                                    <p className="text-gray-700 mt-2">We welcome original, thoughtful, and value-driven posts on technology, self-growth, productivity, or any subject that fits our community.</p>
                                </div>

                                {/* Found a Bug or Facing a Problem? */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Found a Bug or Facing a Problem?</h3>
                                    <p className="text-gray-700 mb-2">We’re sorry about that! Let’s fix it.</p>
                                    <p className="text-gray-700">Please email us with the issue details and a screenshot if possible: <br/><a href="mailto:support@medium-satya.dev" className="text-blue-600 hover:underline">support@medium-satya.dev</a></p>
                                </div>

                                {/* Suggestions & Feedback */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Suggestions & Feedback</h3>
                                    <p className="text-gray-700 mb-2">Your ideas help this platform grow.</p>
                                    <p className="text-gray-700">If you have a suggestion, improvement idea, or even a new feature request, we’d love to hear it.</p>
                                    <p className="text-gray-700 mt-2">Use the feedback form here (add link) or email directly to <a href="mailto:feedback@medium-satya.dev" className="text-blue-600 hover:underline">feedback@medium-satya.dev</a></p>
                                </div>

                                {/* Mailing Address */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mailing Address (if required)</h3>
                                    <p className="text-gray-700">Satya Prakash Swain</p>
                                    <p className="text-gray-700">Cuttack, Odisha, India</p>
                                    <p className="text-gray-700">PIN - 753014</p>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Your support makes “Medium by Satya” better every day. Let’s build a thoughtful space on the internet, together.
                                </p>
                            </div>
                        </div>

                        {/* Original "Join Us" section, now with "Get Started Now" button */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Whether you're a seasoned writer looking for a wider audience or a curious reader eager to explore new ideas, Medium is the place for you. Join our growing community today and start your journey of discovery and expression.
                            </p>
                            <div className="text-center">
                                <a href="#" className="bg-gray-800 inline-block px-8 py-3 rounded-full text-white font-semibold hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section (reused for consistency) */}
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

export default AboutPage;
