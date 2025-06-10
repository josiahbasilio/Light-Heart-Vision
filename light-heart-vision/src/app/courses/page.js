"use client";
import "./courses.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Courses() {
  return (
    <>
      {/* Include Header */}
      <Header />

      {/* ------- Main content ------- */}
      <main className="courses-main">
        <div className="courses-header">
          <h1>Courses & Offerings</h1>
        </div>

        {/* Breadcrumb */}
        <div className="hub-breadcrumb">
          You are here →{" "}
          <Link href="/" className="hub-link">
            Home
          </Link>{" "}
          / Courses & Offerings
        </div>

        {/* Search Bar */}
        <div className="hub-search-container">
          <input type="text" placeholder="Search courses or events" />
          <button>🔍</button>
        </div>

        {/* Course Listings */}
        <div className="courses-list">
          <div className="course-card">
            <h3>Visionary Creativity Workshop</h3>
            <p>
              Explore higher visioning, conscious creativity, and practical
              tools to bring your ideas to life.
            </p>
            <span className="course-info">
              Instructor: Nathanial Parent | $199 | Enroll Now
            </span>
          </div>

          <div className="course-card">
            <h3>Conscious Community Building</h3>
            <p>
              Learn principles of mindful leadership and community development.
              Includes interactive exercises and real-world examples.
            </p>
            <span className="course-info">
              Instructor: Nathanial Parent | $149 | Enroll Now
            </span>
          </div>

          <div className="course-card">
            <h3>Awakened Living Retreat (Event)</h3>
            <p>
              Join our live retreat focused on well-being, creativity, and
              conscious living practices. In-person + online options.
            </p>
            <span className="course-info">
              Facilitator: Nathanial Parent | $299 | Register Now
            </span>
          </div>
        </div>
      </main>
      {/* ------- Main content ------- */}

      {/* Include Footer */}
      <Footer />
    </>
  );
}
