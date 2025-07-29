'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './about.css';
import Header from "@/components/Header";

export default function AboutPage() {
  const founderImages = [
    { src: '/images/founder1.jpg', alt: 'Julia Zanon, Co-founder' },
    { src: '/images/founder2.jpg', alt: 'Nathanial Parent, Co-founder' },
    { src: '/images/founder3.jpg', alt: 'Founders working together' }
  ];

  const [currentFounderImageIndex, setCurrentFounderImageIndex] = useState(0);

  useEffect(() => {
    if (founderImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentFounderImageIndex((prevIndex) => (prevIndex + 1) % founderImages.length);
    }, 4000); // Increased interval for better readability
    return () => clearInterval(interval);
  }, [founderImages.length]);

  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    // TODO: Implement actual newsletter signup API call
    alert("Thanks for joining our newsletter! ✨");
    // e.target.reset();
  }, []);

  return (
    <div className="about-wrapper">
      <Header/>
<<<<<<< HEAD
      💡 Intro Section
=======
      {/* 💡 Intro Section */}
>>>>>>> origin
      {/* <section className="about-intro">
        <div className="intro-content">
          <h1>Welcome to Light Heart Vision 🌟</h1>
          <p>
            Where passion meets purpose. We blend creativity, technology, and human connection
            to create soulful digital experiences that inspire and unite.
          </p>
        </div>
        <div className="intro-image">
          <Image src="/images/some-image.png" alt="Description" width={500} height={300} />
        </div>
      </section> */}

      {/* <Header /> */}

      <main className="about-wrapper">
        <section className="about-intro" aria-labelledby="about-intro-title">
          <div className="intro-content">
            <h1 id="about-intro-title">Welcome to Light Heart Vision 🌟</h1>
            <p>
              Where passion meets purpose. We blend creativity, technology, and human connection
              to create soulful digital experiences that inspire and unite.
            </p>
          </div>
          <div className="intro-image">
            <Image
              src="/images/dragon.png"
              alt="Artistic illustration representing Light Heart Vision's ethos"
<<<<<<< HEAD
              width={500} height={300}
=======
              width={500} height={300} layout="responsive"
>>>>>>> origin
              onError={(e) => e.currentTarget.src = DEFAULT_INTRO_IMAGE}
            />
          </div>
        </section>

        <section className="who-we-are" aria-labelledby="who-we-are-title">
          <h2 id="who-we-are-title" className="sr-only">Who We Are</h2>
          <div className="text-box">
            <h3>Our Mission</h3>
            <p>
              To foster a heartfelt digital space where creators, dreamers, and changemakers feel seen and heard.
              We’re committed to crafting meaningful experiences that make people feel something real.
            </p>
          </div>
          <div className="text-box">
            <h3>What Drives Us</h3>
            <p>
              Empathy. Joy. Curiosity. We believe these are the superpowers that spark transformation.
              We’re not just a brand — we’re a movement built on warmth and intention.
            </p>
          </div>
        </section>

        <section className="features-grid" aria-labelledby="features-title">
          <h2 id="features-title">What We Offer</h2>
          <div className="grid">
            <div className="feature-card">
              <Image src="/icons/creative.svg" alt="" width={64} height={64} onError={(e) => e.currentTarget.src = DEFAULT_ICON} />
              <h3>Creative Campaigns</h3>
              <p>We build campaigns that capture attention and spark emotion.</p>
            </div>
            <div className="feature-card">
              <Image src="/icons/events.png" alt="" width={64} height={64} onError={(e) => e.currentTarget.src = DEFAULT_ICON} />
              <h3>Community Building</h3>
              <p>Creating safe, vibrant spaces online and offline.</p>
            </div>
            <div className="feature-card">
              <Image src="/icons/storytelling.svg" alt="" width={64} height={64} onError={(e) => e.currentTarget.src = DEFAULT_ICON} />
              <h3>Impactful Storytelling</h3>
              <p>Stories that resonate and stay with you long after.</p>
            </div>
          </div>
        </section>

        {founderImages.length > 0 && (
          <section className="founders-section" aria-labelledby="founders-title">
            <h2 id="founders-title">👩‍🚀 Meet the Founders</h2>
            <p className="founders-intro">
              Light Heart Vision is led by Julia Zanon and Nathanial Parent — two visionary souls united by a shared purpose...
            </p>
            <div className="founder-card image-fader" role="region" aria-live="polite" aria-atomic="true">
              {founderImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={400} height={400} // Ensure these dimensions are appropriate
                  className={`fade-img ${index === currentFounderImageIndex ? 'visible' : ''}`}
                  priority={index === 0}
                  onError={(e) => e.currentTarget.src = DEFAULT_FOUNDER_IMAGE}
                  style={{ objectFit: 'cover' }}
                />
              ))}
            </div>
          </section>
        )}

        <section className="team-showcase" aria-labelledby="team-title">
          <h2 id="team-title">Meet the Team 💫</h2>
          <div className="team-cards">
            {[
              { name: 'Josiah Basilio', role: 'Creative Director', imgSrc: '/images/josiah.png' },
              { name: 'Nisarg Patel', role: 'Tech Lead', imgSrc: '/images/nisarg.jpg' },
              { name: 'Sansita Pattnaik', role: 'Community Manager', imgSrc: '/images/Sansita.jpg' },
              { name: 'Dhara Patel', role: 'Community Manager', imgSrc: '/images/Dhara.jpg' },
            ].map(member => (
              <figure key={member.name} className="team-member">
                <Image
                  src={member.imgSrc}
                  alt={`Photo of ${member.name}, ${member.role}`}
                  width={150} height={150}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                  onError={(e) => e.currentTarget.src = DEFAULT_TEAM_IMAGE}
                />
                <figcaption>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="newsletter-box fancy" aria-labelledby="newsletter-title">
          <h2 id="newsletter-title">Let’s Stay Connected 📬</h2>
          <p>Get our latest ideas, updates, and joyful notes in your inbox.</p>
          <form onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">Your Email Address</label>
            <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
            <button type="submit">Join Now</button>
          </form>
        </section>
      </main>

      {/* <Footer /> */}
      <footer className="about-footer new-footer">
        <p>© {new Date().getFullYear()} Light Heart Vision — Designed with care & soul 💛</p>
      </footer>
    </div>
  );
}