'use client';

export default function Hub() {
  const categories = [
    { icon: '🌟', title: 'Vision Board', desc: 'Share your dream and intentions with the community.' },
    { icon: '🧘‍♀️', title: 'Mindful Living', desc: 'Tips, tools, and lifestyle for conscious co-creation.' },
    { icon: '🎨', title: 'Creative Flow', desc: 'Art, music, and storytelling to elevate humanity.' },
    { icon: '🤝', title: 'Collaboration Corner', desc: 'Find collaborators for your visionary projects.' },
    { icon: '🗓️', title: 'Events & Meetups', desc: 'In-person and online events to build deeper connection.' },
    { icon: '📚', title: 'Community Resources', desc: 'Inspiration, guides, and learning materials shared by members.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-200 text-gray-800 px-6 py-10">
      {/* Hero Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Community Hub</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
          Dive into conscious conversations, collaborative creativity, and cosmic connection.
        </p>
      </header>

      {/* Category Buttons */}
      <section className="bg-white rounded-lg shadow-md max-w-4xl mx-auto mb-10 p-4 flex justify-around flex-wrap">
        <button className="py-2 px-4 m-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">Help</button>
        <button className="py-2 px-4 m-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">FAQs</button>
        <button className="py-2 px-4 m-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">Ongoing Projects</button>
      </section>

      {/* Community Circles */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="text-5xl mb-3">{cat.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
            <p className="text-sm text-gray-600">{cat.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
