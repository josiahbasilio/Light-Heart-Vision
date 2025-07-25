"use client";
import "./hub.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Hub() {
  const categories = [
    {
      icon: "📅",
      title: "Events",
      desc: "Upcoming community events, workshops, and meetups.",
      href: "/hub/events-calendar",
    },
    {
      icon: "🫶",
      title: "Heart Space",
      desc: "Connect, reflect, and co-create through meaningful community conversations.",
      href: "/hub/heart-space",
    },
    {
      icon: "📚",
      title: "Community Resources",
      desc: "Find guides, tools, and content shared by members.",
      href: "/hub/community-resources",
    },
    {
      icon: "📝",
      title: "Blog",
      desc: "Read stories, reflections, and updates from our community.",
      href: "/hub/blog",
    },
  ];

  return (
    <>
      <Header />

      <main className="hub-main">
        <div className="hub-header">
          <h1>Community Hub</h1>
          <p className="hub-subtitle">Search. Share. Support.</p>
        </div>

        <div className="hub-breadcrumb">
          You are here →{" "}
          <Link href="/" className="hub-link">
            Home
          </Link>{" "}
          / Community Hub
        </div>

        <div className="hub-search-container">
          <input type="text" placeholder="Search all content" />
          <button>🔍</button>
        </div>

        <section className="hub-buttons">
          <button className="active">❓ FAQs</button>
          <button className="secondary">📂 Help Categories</button>
        </section>

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

      <Footer />
    </>
  );
}
