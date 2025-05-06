"use client";
import "./hub.css";
import Link from "next/link";

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
      {/* Header */}
      <header>
        <nav className="nav-bar">
          <div className="nav-inner">
            <div className="nav-left" />

            {/* Navigation Links */}
            <ul className="nav-center">
              <li>
                <a href="/hub">Community</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="/aboutUs">About</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>

            {/* Sign In Button */}
            <div className="nav-right">
              <Link href="/signin" passHref legacyBehavior>
                <a className="signInLink">
                  <div className="signIn">
                    <span className="icon">👤</span>
                    <span className="label">Sign In</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

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

      {/* Newsletter Section */}
      <section className="subscribe-section">
        <div className="subscribe-box">
          <h2>Let’s Stay Connected 📬</h2>
          <p>
            Join our love-letter to the future. Get updates, stories, and joyful
            inspiration.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing! 💌");
            }}
          >
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Light Heart Vision. Made with love and moonlight 🌙</p>
      </footer>
    </>
  );
}
