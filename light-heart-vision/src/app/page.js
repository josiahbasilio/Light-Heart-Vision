"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function Home() {
  // ---------------------
  // STATE
  // ---------------------
  const [videoVisible, setVideoVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // ---------------------
  // EVENT HANDLERS
  // ---------------------

  const showVideo = () => setVideoVisible(true);
  const toggleModal = () => setShowModal(!showModal);
  // ---------------------
  // EFFECT: Scroll animations & mouse-driven star movement
  // ---------------------

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      section.classList.add("animate-on-scroll");
      observer.observe(section);
    });

    let animationFrame;
    const handleMouseMove = (e) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        document
          .querySelectorAll(".floating-shape .move-with-mouse")
          .forEach((el, i) => {
            const offset = (i + 1) * 10;
            el.style.transform = `translate(${e.clientX / offset}px, ${
              e.clientY / offset
            }px)`;
          });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div>
      {/* ==================================================
          HEADER SECTION
      ================================================== */}
      <Header />

      {/* ==================================================
          HERO SECTION WITH FLOATING STARS & CTA
      ================================================== */}
      <section className="hero">
        {["star-1", "star-2", "star-3"].map((star, i) => (
          <div key={i} className={`floating-shape ${star}`}>
            <div className="move-with-mouse">
              {/* ***** USE NEXT/IMAGE HERE ***** */}
              {/* Assuming star.png is small, e.g., 50x50. Adjust as needed. */}
              <Image src="/images/star.png" alt="star" width={50} height={50} />
            </div>
          </div>
        ))}

        <h1 className="fade-in-title glow-text">
          Awaken Wonder. Inspire Change
        </h1>
        <p className="fade-in-text">Connect ~ Community ~ Co-Creation</p>
        <button className="cta-button fade-in-btn" onClick={toggleModal}>
          Join the Vision
        </button>
      </section>

      {/* ==================================================
           MODAL POPUP FOR NEWSLETTER SIGNUP
      ================================================== */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>✨ Join the Vision</h2>
            <p>Subscribe to stay connected with Light Heart Vision!</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("You're in! 🌟");
                setShowModal(false);
              }}
            >
              <input type="email" placeholder="Your email" required />
              <button type="submit">Let&apos;s Go!</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              ×
            </button>
          </div>
        </div>
      )}

      {/* ==================================================
           VIDEO INTRO SECTION
      ================================================== */}
      <section className="section video-section" id="about">
        <h2>Welcome to Light Heart Vision</h2>
        <p>
          We bring conscious creators together to imagine and build a better
          world.
        </p>
        {!videoVisible ? (
          <div className="video-placeholder" onClick={showVideo}>
            ▶ Click to play intro video
          </div>
        ) : (
          <div id="video-container" style={{ marginTop: "20px" }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                width: "90%",
                maxWidth: "640px",
                height: "360px",
                border: "none",
                borderRadius: "10px",
              }}
              title="Intro Video"
            ></iframe>
          </div>
        )}
      </section>

      {/* ==================================================
           FEATURED CONTENT CARDS
      ================================================== */}
      <section className="section featured-content">
        <h2>Featured Content</h2>
        <div className="cards">
          <div className="card" onClick={() => alert("Explore Courses")}>
            <Image src="/images/course.png" alt="Courses" width={150} height={100} />
            <div className="card-title">Courses</div>
          </div>

          <div className="card" onClick={() => alert("See Upcoming Events")}>
            <Image src="/images/events.png" alt="Events" width={150} height={100} />
            <div className="card-title">Events</div>
          </div>

          <div className="card" onClick={() => alert("Check Out Community")}>
            <Image src="/images/community.png" alt="Community" width={150} height={100} />
            <div className="card-title">Community</div>
          </div>

          <div className="card" onClick={() => alert("Check Out Blogs")}>
            <Image src="/images/blog.png" alt="Blog" width={150} height={100} />
            <div className="card-title">Blog</div>
          </div>
        </div>
      </section>

      {/* ==================================================
           FLIP-CARD COMMUNITY HIGHLIGHTS
      ================================================== */}
      <section className="section" id="community">
        <h2>🦋 Explore Our Universe 🦋</h2>
        <div className="card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">🌍 Our Story</div>
              <div className="flip-card-back">
                Meet the hearts behind the vision and why we started.
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">🎨 Creative Collabs</div>
              <div className="flip-card-back">
                Art jams, virtual circles, and co-creation magic await!
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">🌱 Events & Retreats</div> {/* Fixed unescaped entity */}
              <div className="flip-card-back">
                Join us in sacred spaces for deep connection & growth. {/* Fixed unescaped entity */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SCROLL-TO-TOP BUTTON
      ================================================== */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* ==================================================
          FOOTER SECTION
      ================================================== */}
      <Footer />
    </div>
  );
}
