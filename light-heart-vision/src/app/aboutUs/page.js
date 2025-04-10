'use client';
import React from 'react';
import './about.css';

export default function AboutPage() {
  return (
    <div className="about-wrapper">
      {/* Hero Intro */}
      <section className="about-hero">
        <h1 className="glow-text">We Are Light Heart Vision</h1>
        <p>Where creativity, compassion, and community converge.</p>
      </section>

      {/* Mission Section */}
      <section className="about-section mission">
        <h2>🌟 Our Mission</h2>
        <p>
          To nurture a space where hearts are open, voices are heard, and visions become reality. 
          We believe in the power of connection, the magic of collaboration, and the beauty of purpose-driven creativity.
        </p>
      </section>

      {/* Values Cards */}
      <section className="about-section values">
        <h2>✨ What We Stand For</h2>
        <div className="value-cards">
          <div className="value-card">Authenticity</div>
          <div className="value-card">Unity</div>
          <div className="value-card">Growth</div>
          <div className="value-card">Joy</div>
          <div className="value-card">Courage</div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="about-section story">
        <h2>🦋 Our Story</h2>
        <p>
          It started with a question: “What if we built a home for dreamers?”
          <br /><br />
          From journal scribbles and fireside talks, we blossomed into a movement. 
          A collective of artists, thinkers, change-makers and feelers — all driven by the desire to co-create a more compassionate world.
        </p>
      </section>

   {/* Newsletter Interactive Box */}
<section className="about-section subscribe">
  <div className="subscribe-box">
    <h2>Stay in the Loop 🌈</h2>
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
    </div>
  );
}
