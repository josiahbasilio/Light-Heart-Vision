'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // ***** IMPORT NEXT/IMAGE *****
import './about.css';

export default function AboutPage() {
  const founderImages = [
    '/images/founder1.jpg',
    '/images/founder2.jpg',
    '/images/founder3.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % founderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [founderImages.length]); // ***** ADDED founderImages.length to dependency array *****


  return (
    <div className="about-wrapper">
      {/* 💡 Intro Section */}
      <section className="about-intro">
        <div className="intro-content">
          <h1>Welcome to Light Heart Vision 🌟</h1>
          <p>
            Where passion meets purpose. We blend creativity, technology, and human connection
            to create soulful digital experiences that inspire and unite.
          </p>
        </div>
        <div className="intro-image">
          {/* ***** USE NEXT/IMAGE HERE ***** */}
          {/* Adjust width and height as needed for dragon.png */}
          <Image src="/images/dragon.png" alt="Vision Illustration" width={400} height={300} />
        </div>
      </section>

      {/* 🔍 Who We Are Section */}
      <section className="who-we-are">
        <div className="text-box">
          <h2>Our Mission</h2>
          <p>
            To foster a heartfelt digital space where creators, dreamers, and changemakers feel seen and heard.
            We’re committed to crafting meaningful experiences that make people feel something real.
          </p>
        </div>
        <div className="text-box">
          <h2>What Drives Us</h2>
          <p>
            Empathy. Joy. Curiosity. We believe these are the superpowers that spark transformation.
            We’re not just a brand — we’re a movement built on warmth and intention.
          </p>
        </div>
      </section>

      {/* 🌈 Features Grid */}
      <section className="features-grid">
        <h2>What We Offer</h2>
        <div className="grid">
          <div className="feature-card">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            {/* Adjust width and height for icons */}
            <Image src="/icons/creative.svg" alt="Creative" width={80} height={80} />
            <h3>Creative Campaigns</h3>
            <p>We build campaigns that capture attention and spark emotion.</p>
          </div>
          <div className="feature-card">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            <Image src="/icons/events.png" alt="Community" width={80} height={80} />
            <h3>Community Building</h3>
            <p>Creating safe, vibrant spaces online and offline.</p>
          </div>
          <div className="feature-card">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            <Image src="/icons/storytelling.svg" alt="Storytelling" width={80} height={80} />
            <h3>Impactful Storytelling</h3>
            <p>Stories that resonate and stay with you long after.</p>
          </div>
        </div>
      </section>

      {/* 👩‍🚀 Founders Section */}
      <section className="founders-section">
        <h2>👩‍🚀 Meet the Founders</h2>
        <p className="founders-intro">
          Light Heart Vision is led by Julia Zanon and Nathanial Parent — two visionary souls united by a shared purpose:
          to inspire meaningful connection through creativity, compassion, and community.
        </p>
        <div className="founder-card image-fader">
          {founderImages.map((img, index) => (
            // ***** USE NEXT/IMAGE HERE *****
            // Adjust width and height for founder images
            <Image
              key={index}
              src={img}
              alt={`Founder ${index + 1}`}
              className={`fade-img ${index === currentImage ? 'visible' : ''}`}
              width={300} // Example width
              height={400} // Example height
              style={{ objectFit: 'cover' }} // Optional: to ensure image covers the area
            />
          ))}
        </div>
      </section>

      {/* 🧑‍🤝‍🧑 Team Section */}
      <section className="team-showcase">
        <h2>Meet the Team 💫</h2>
        <div className="team-cards">
          <div className="team-member">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            {/* Adjust width and height for team member images */}
            <Image src="/images/josiah.png" alt="Josiah Basilio" width={150} height={150} style={{ borderRadius: '50%' }} />
            <h4>Josiah Basilio</h4>
            <p>Creative Director</p>
          </div>

          <div className="team-member">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            <Image src="/images/nisarg.jpg" alt="Nisarg Patel" width={150} height={150} style={{ borderRadius: '50%' }} />
            <h4>Nisarg Patel</h4>
            <p>Tech Lead</p>
          </div>

          <div className="team-member">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            <Image src="/images/Sansita.jpg" alt="Sansita Pattnaik" width={150} height={150} style={{ borderRadius: '50%' }} />
            <h4>Sansita Pattnaik</h4>
            <p>Community Manager</p>
          </div>

          <div className="team-member">
            {/* ***** USE NEXT/IMAGE HERE ***** */}
            <Image src="/images/Dhara.jpg" alt="Dhara Patel" width={150} height={150} style={{ borderRadius: '50%' }} />
            <h4>Dhara Patel</h4>
            <p>Community Manager</p>
          </div>
        </div>
      </section>


      {/* 📬 Newsletter */}
      <section className="newsletter-box fancy">
        <h2>Let’s Stay Connected 📬</h2>
        <p>Get our latest ideas, updates, and joyful notes in your inbox.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining! ✨"); }}>
          <input type="email" placeholder="you@example.com" required />
          <button type="submit">Join Now</button>
        </form>
      </section>

      {/* 🌙 Footer */}
      <footer className="about-footer new-footer">
        <p>© 2025 Light Heart Vision — Designed with care & soul 💛</p> {/* Fixed unescaped entity */}
      </footer>
    </div>
  );
}