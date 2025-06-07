"use client";
import "./heart-space.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HeartSpace() {
  return (
    <>
      {/* Include Header */}
      <Header />

      {/* ------- Main content ------- */}
      <main className="heartspace-main">
        <div className="heartspace-header">
          <h1>Heart Space</h1>
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
          / HeartSpace
        </div>

        {/* Search Bar */}
        <div className="hub-search-container">
          <input type="text" placeholder="Search all content" />
          <button>🔍</button>
        </div>

        {/* Start a Topic Button */}
        <div className="start-topic-btn">
          <button>START A TOPIC</button>
        </div>

        {/* Discussion Section */}
        <div className="discussion-section">
          <h2>Welcome to the Heart Space 🫶</h2>
          <p>
            This is a space to connect, reflect, and co-create. Share ideas, ask
            questions, and take part in conscious conversations that inspire
            growth and community support.
          </p>
          <Link href="/heartspace/topics" className="discussion-link">
            Explore topics & join the conversation →
          </Link>
        </div>

        {/* Guidelines Card Section */}
        <div className="guidelines-card">
          <div className="guidelines-content">
            <h3>[Guidelines] Heart Space</h3>
            <p>
              Welcome to Heart Space! This is the place for mindful discussion,
              respectful dialogue, and collaborative co-creation. Be kind, stay
              curious, and uplift one another :)
            </p>
            <span className="posted-by">
              Posted by Team Decoders / 2025-5-31 9:51:40 AM
            </span>
          </div>
          <div className="guidelines-stats">
            <div className="stat">
              <strong>0</strong>
              <span>replies</span>
            </div>
            <div className="stat">
              <strong>17</strong>
              <span>likes</span>
            </div>
          </div>
        </div>
      </main>
      {/* ------- Main content ------- */}

      {/* Include Footer */}
      <Footer />
    </>
  );
}
