"use client";
import "./mindful-living.css";
import Link from "next/link";

export default function MindfulLiving() {
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
      <main className="mindful-main">
        <div className="mindful-header">
          <h1>Mindful Living</h1>
        </div>

        {/* Breadcrumb */}
        <div className="hub-breadcrumb">
          You are here →{" "}
          <Link href="/" className="hub-link">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/hub" className="hub-link">
            Community Hub
          </Link>{" "}
          / Mindful Living
        </div>

        {/* Search Bar */}
        <div className="hub-search-container">
          <input type="text" placeholder="Search all content" />
          <button>🔍</button>
        </div>

        {/* Start a Topic Button */}
        <div className="start-topic-btn">
          <button>Start a Topic</button>
        </div>

        {/* Meditation Section */}
        <div className="meditation-section">
          <h2>How to Meditate 🧘‍♂️</h2>
          <p>
            Meditation is a practice that helps you stay present, calm your
            mind, and reduce stress. It's a journey of peace and self-awareness.
          </p>
          <Link
            href="https://www.mindful.org/how-to-meditate/"
            target="_blank"
            className="meditation-link"
          >
            Learn how to meditate here →
          </Link>
        </div>

        {/* Newsletter Section */}
        <section className="subscribe-section">
          <div className="subscribe-box">
            <h2>Let’s Stay Connected 📬</h2>
            <p>
              Join our love-letter to the future. Get updates, stories, and
              joyful inspiration.
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
      </main>
      {/* ------- Main content ------- */}
    </>
  );
}
