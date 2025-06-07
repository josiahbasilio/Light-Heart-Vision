"use client";
import "./mindful-living.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MindfulLiving() {
  return (
    <>
      {/* Include Header */}
      <Header />

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
            mind, and reduce stress. It&apos;s a journey of peace and self-awareness.
          </p>
          <Link
            href="https://www.mindful.org/how-to-meditate/"
            target="_blank"
            className="meditation-link"
          >
            Learn how to meditate here →
          </Link>
        </div>
      </main>
      {/* ------- Main content ------- */}

<<<<<<< HEAD
      {/* Meditation Section */}
      <div className="meditation-section">
        <h2>How to Meditate 🧘‍♂️</h2>
        <p>Meditation is a practice that helps you stay present, calm your mind, and reduce stress. It&apos;s a journey of peace and self-awareness.</p>
        <Link href="https://www.mindful.org/how-to-meditate/" target="_blank" className="meditation-link">
          Learn how to meditate here →
        </Link>
      </div>
    </div>
=======
      {/* Include Footer */}
      <Footer />
    </>
>>>>>>> dev
  );
}
