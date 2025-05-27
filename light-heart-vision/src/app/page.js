'use client';

import Link from 'next/link'; // Make sure Link is imported
import Image from 'next/image'; // ***** IMPORT NEXT/IMAGE *****
import { useState, useEffect } from 'react';

// Assuming your CSS file is correctly imported, e.g., import './Home.css';

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
    // Animate sections when scrolled into view
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    // Mouse interaction for floating star movement
    let animationFrame;
    const handleMouseMove = (e) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        document.querySelectorAll('.floating-shape .move-with-mouse').forEach((el, i) => {
          const offset = (i + 1) * 10;
          el.style.transform = `translate(${e.clientX / offset}px, ${e.clientY / offset}px)`;
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) { // Check if animationFrame was set before cancelling
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // ---------------------
  // RENDER
  // ---------------------
  return (
    <div>
      {/* ---------------- Header Navigation (UPDATED) ---------------- */}
      <header>
        <nav className="nav-bar">
          <div className="nav-inner">
            <div className="nav-left" />
            <ul className="nav-center">
              <li><a href="/hub">Community</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="/aboutUs">About</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="nav-right">
              {/* --- Changed Link and Button Below --- */}
              <Link href="/signUp" className="signUpLink"> {/* Changed href */}
                <button className="signUpButton"> {/* Changed class name (optional) */}
                  <span className="icon">✨</span> {/* Changed icon (optional) */}
                  <span className="label">Sign Up</span> {/* Changed label */}
                </button>
              </Link>
              {/* --- End of Changes --- */}
            </div>
          </div>
        </nav>
      </header>

      {/* ---------------- Hero Section ---------------- */}
      <section className="hero">
        {/* Animated Stars */}
        {['star-1', 'star-2', 'star-3'].map((star, i) => (
          <div key={i} className={`floating-shape ${star}`}>
            <div className="move-with-mouse">
              {/* ***** USE NEXT/IMAGE HERE ***** */}
              {/* Assuming star.png is small, e.g., 50x50. Adjust as needed. */}
              <Image src="/images/star.png" alt="star" width={50} height={50} />
            </div>
          </div>
        ))}

        {/* Main Hero Text */}
        <h1 className="fade-in-title glow-text">Awaken Wonder. Inspire Change</h1>
        <p className="fade-in-text">Connect ~ Community ~ Co-Creation</p>
        <button className="cta-button fade-in-btn" onClick={toggleModal}>
          Join the Vision
        </button>
      </section>

      {/* ---------------- Modal Popup ---------------- */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>✨ Join the Vision</h2>
            <p>Subscribe to stay connected with Light Heart Vision!</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert("You're in! 🌟"); // Fixed unescaped entity
              setShowModal(false);
            }}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Let&apos;s Go!</button> {/* Fixed unescaped entity */}
            </form>
            <button className="close-modal" onClick={toggleModal}>×</button>
          </div>
        </div>
      )}

      {/* ---------------- About / Video Section ---------------- */}
      <section className="section video-section" id="about">
        <h2>Welcome to Light Heart Vision</h2>
        <p>We bring conscious creators together to imagine and build a better world.</p>
        {!videoVisible ? (
          <div className="video-placeholder" onClick={showVideo}>
            ▶ Click to play intro video
          </div>
        ) : (
          <div id="video-container" style={{ marginTop: '20px' }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Consider a real placeholder video :)
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                width: '90%',
                maxWidth: '640px',
                height: '360px',
                border: 'none',
                borderRadius: '10px'
              }}
              title="Intro Video" // Added title for accessibility
            ></iframe>
          </div>
        )}
      </section>

      {/* ---------------- Featured Content Cards ---------------- */}
      <section className="section featured-content">
        <h2>Featured Content</h2>
        <div className="cards">
          <div className="card" onClick={() => alert('Explore Courses')}>
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            {/* Assuming course.png is e.g., 200x150. Adjust as needed. */}
            <Image src="/images/course.png" alt="Courses" width={200} height={150} />
            <div className="card-title">Courses</div>
          </div>

          <div className="card" onClick={() => alert('See Upcoming Events')}>
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            {/* Assuming events.png is e.g., 200x150. Adjust as needed. */}
            <Image src="/images/events.png" alt="Events" width={200} height={150} />
            <div className="card-title">Events</div>
          </div>

          {/* Ensure Link wraps the clickable element for navigation */}
          <Link href="/hub">
            <div className="card">
              {/* ***** USE NEXT/IMAGE HERE ***** */}
              {/* Assuming community.png is e.g., 200x150. Adjust as needed. */}
              <Image src="/images/community.png" alt="Community" width={200} height={150} />
              <div className="card-title">Community</div>
            </div>
          </Link>

          <div className="card" onClick={() => alert('Check Out Blogs')}>
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            {/* Assuming blog.png is e.g., 200x150. Adjust as needed. */}
            <Image src="/images/blog.png" alt="Blog" width={200} height={150} />
            <div className="card-title">Blog</div>
          </div>
        </div>
      </section>

      {/* ---------------- Flip Card Section ---------------- */}
      <section className="section" id="community">
        <h2>🦋 Explore Our Universe 🦋</h2>
        <div className="card-container">
          {/* Flip Cards */}
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

      {/* ---------------- Subscription Section ---------------- */}
      <section className="about-section subscribe">
        <div className="subscribe-box">
          <h2>Let’s Stay Connected 📬</h2>
          <p>Join our love-letter to the future. Get updates, stories, and joyful inspiration.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing! 💌'); }}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2025 Light Heart Vision. Made with love and moonlight 🌙</p>
      </footer>

      {/* ---------------- Scroll-to-Top Button ---------------- */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top" // Added aria-label for accessibility
      >
        ↑
      </button>
    </div>
  );
}