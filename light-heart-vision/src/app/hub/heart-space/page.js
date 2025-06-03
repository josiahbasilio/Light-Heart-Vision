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
          <button>Start a Topic</button>
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
      </main>
      {/* ------- Main content ------- */}

      {/* Include Footer */}
      <Footer />
    </>
  );
}
