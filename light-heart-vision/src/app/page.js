"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stars from "@/components/stars";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  // Background color scroll transition
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const hexToRgb = (hex) => {
      const val = hex.replace("#", "");
      return [
        parseInt(val.substring(0, 2), 16),
        parseInt(val.substring(2, 4), 16),
        parseInt(val.substring(4, 6), 16),
      ];
    };
    const rgbToHex = (r, g, b) =>
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = Math.round(x).toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

    const dark = hexToRgb("#1C1C4A");
    const light = hexToRgb("#FDFDFD");

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const scrollRatio = Math.min(scrollPos / maxScroll, 1);
      const blended = dark.map((d, i) => lerp(d, light[i], scrollRatio));
      document.body.style.backgroundColor = rgbToHex(...blended);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Heart intro animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll animation & star motion
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
        document.querySelectorAll(".floating-shape .move-with-mouse").forEach((el, i) => {
          const offset = (i + 1) * 10;
          el.style.transform = `translate(${e.clientX / offset}px, ${e.clientY / offset}px)`;
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

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      {/* ============================
          GLOWING HEART IMAGE INTRO
      ============================ */}
      {!introComplete && (
        <div className="heart-intro-overlay">
          <div className="heart-image-wrapper">
            <img src="/images/Light_Heart_Vision_Logo.png" alt="Light Heart Logo" />
          </div>
        </div>
      )}

      <Header />
      <Stars />

      <section className="hero">
        <h1 className="fade-in-title glow-text">Welcome To Light Heart Vision</h1>
        <p className="fade-in-text">Awaken Wonder; Inspire Change</p>
        <button className="cta-button fade-in-btn" onClick={toggleModal}>
          Join the Vision
        </button>
      </section>

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
            <button className="close-modal" onClick={toggleModal}>×</button>
          </div>
        </div>
      )}

      <section className="section video-section" id="about">
        <h2>Welcome to Light Heart Vision</h2>
        <p>
          We bring conscious creators together to imagine and build a better world.
        </p>
        <div id="video-container" style={{ marginTop: "20px" }}>
          <iframe
            src="https://www.youtube.com/embed/ksol37fUmvo"
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
      </section>

      <section className="section featured-content">
        <h2>Featured Content</h2>
        <div className="cards">
          <div className="card" onClick={() => alert("Explore Courses")}>
            <img src="/images/course.png" alt="Courses" />
            <div className="card-title">Courses</div>
          </div>
          <div className="card" onClick={() => alert("See Upcoming Events")}>
            <img src="/images/events.png" alt="Events" />
            <div className="card-title">Events</div>
          </div>
          <div className="card" onClick={() => alert("Check Out Community")}>
            <img src="/images/blue_2.png" alt="Community" />
            <div className="card-title">Community</div>
          </div>
          <div className="card" onClick={() => alert("Check Out Blogs")}>
            <img src="/images/blue_1.png" alt="Blog" />
            <div className="card-title">Blog</div>
          </div>
        </div>
      </section>

      <section className="section" id="community">
        <h2>🦋 Explore Our Universe 🦋</h2>
        <div className="card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">🌍 Our Story</div>
              <div className="flip-card-back">Meet the hearts behind the vision and why we started.</div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">🎨 Creative Collabs</div>
              <div className="flip-card-back">Art jams, virtual circles, and co-creation magic await!</div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">🌱 Events & Retreats</div>
              <div className="flip-card-back">Join us in sacred spaces for deep connection & growth.</div>
            </div>
          </div>
        </div>
      </section>

      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <Footer />
    </div>
  );
}
