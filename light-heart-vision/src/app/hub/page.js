"use client";
import "./hub.css";
import Link from "next/link";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Hub() {
  const categories = [
    {
      icon: "🌟",
      title: "Vision Board",
      desc: "Share your dreams and intentions with a like-minded community.",
    },
    {
      icon: "🗓️",
      title: "Events",
      desc: "Explore upcoming virtual and in-person gatherings.",
    },
    {
      icon: "📚",
      title: "Community Resources",
      desc: "Find guides, tools, and content shared by members.",
    },
    {
      icon: "🧘‍♀️",
      title: "Mindful Living",
      desc: "Discover practices for peace, wellness, and connection.",
      href: "/hub/mindful-living", // This is important
    },
  ];

  return (
    <>
       {/* Include Header */}
       <Header />

      {/* ------- Main content ------- */}
      <main className="hub-main">
        {/* Title */}
        <div className="hub-header">
          <h1>Community Hub</h1>
          <p className="hub-subtitle">Search. Share. Support.</p>
        </div>

        {/* Breadcrumb */}
        <div className="hub-breadcrumb">
          You are here →{" "}
          <Link href="/" className="hub-link">
            Home
          </Link>{" "}
          / Community Hub
        </div>

        {/* Search Content*/}
        <div className="hub-search-container">
          <input type="text" placeholder="Search all content" />
          <button>🔍</button>
        </div>

        {/* Tabs */}
        <section className="hub-buttons">
          <button className="active">❓ FAQs</button>
          <button className="secondary">📂 Help Categories</button>
        </section>

        {/* Cards */}
        <section className="hub-grid">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href || "#"} className="hub-card-link">
              <div className="hub-card">
                <div className="hub-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p className="hub-desc">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      {/* ------- Main content ------- */}

       {/* Include Footer */}
       <Footer />
    </>
  );
}
