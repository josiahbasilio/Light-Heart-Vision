'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#f8f9fa] text-[#222] font-sans px-6 py-10 sm:px-16">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50 py-4">
        <nav className="flex justify-center gap-10 text-sm sm:text-base font-semibold">
          <a href="#community" className="hover:text-yellow-600 transition">Community</a>
          <a href="#courses" className="hover:text-yellow-600 transition">Courses</a>
          <a href="#about" className="hover:text-yellow-600 transition">About</a>
          <a href="#membership" className="hover:text-yellow-600 transition">Membership</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full text-center flex flex-col justify-center items-center pt-32 pb-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Awaken Wonder. Inspire Change.</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Connect ~ Community ~ Co-Creation</p>
        <a
          href="#newsletter"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition"
        >
          Join the Vision
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-3xl text-center mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Welcome to Light Heart Vision</h2>
        <p className="mb-6 text-gray-700">
          We bring conscious creators together to imagine and build a better world.
        </p>
        <div className="aspect-w-16 aspect-h-9 w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Intro Video"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Community Cards */}
      <section id="community" className="text-center max-w-5xl mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Explore Our Universe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: '🌍 Our Story', desc: 'Meet the hearts behind the vision and why we started.' },
            { title: '🎨 Creative Collabs', desc: 'Art jams, virtual circles, and co-creation magic await!' },
            { title: '🌱 Events & Retreats', desc: 'Join us in sacred spaces for deep connection & growth.' },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        id="newsletter"
        className="bg-[#fff8e1] w-full text-center py-16 px-6 mb-10 rounded-xl shadow-inner"
      >
        <h2 className="text-2xl font-semibold mb-6">Subscribe for Inspiration</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('✨ Thanks for joining the Light Heart Vision!');
          }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 w-full"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-500 py-6 text-center">
        © {new Date().getFullYear()} Light Heart Vision. All rights reserved.
      </footer>
    </div>
  );
}
