'use client';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function Home() {
  const [videoVisible, setVideoVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showVideo = () => setVideoVisible(true);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    // Scroll animation observer
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    // Mouse interaction for stars
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
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    
    <div>
      <header>
      <nav className="nav-bar">
    <div className="nav-inner">
      <div className="nav-left" />
      
      <ul className="nav-center">
        <li><a href="/hub">Community</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <div className="nav-right">
        <Link href="/signin" className="signInLink">
          <button className="signIn">
            <span className="icon">👤</span>
            <span className="label">Sign In</span>
          </button>
        </Link>
      </div>
    </div>
  </nav>

      </header>

      <section className="hero">
        <div className="floating-shape star-1">
          <div className="move-with-mouse">
            <img src="/images/star.png" alt="star" />
          </div>
        </div>
        <div className="floating-shape star-2">
          <div className="move-with-mouse">
            <img src="/images/star.png" alt="star" />
          </div>
        </div>
        <div className="floating-shape star-3">
          <div className="move-with-mouse">
            <img src="/images/star.png" alt="star" />
          </div>
        </div>


        <h1 className="fade-in-title glow-text">Awaken Wonder. Inspire Change</h1>
        <p className="fade-in-text">Connect ~ Community ~ Co-Creation</p>
        <button className="cta-button fade-in-btn" onClick={toggleModal}>Join the Vision</button>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>✨ Join the Vision</h2>
            <p>Subscribe to stay connected with Light Heart Vision!</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert("You're in! 🌟");
              setShowModal(false);
            }}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Let's Go!</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>×</button>
          </div>
        </div>
      )}

      <section className="section video-section" id="about">
        <h2>Welcome to Light Heart Vision</h2>
        <p>We bring conscious creators together to imagine and build a better world.</p>
        <div className="video-placeholder" onClick={showVideo}>
          ▶ Click to play intro video
        </div>
        {videoVisible && (
          <div id="video-container" style={{ marginTop: '20px' }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                width: '90%',
                maxWidth: '640px',
                height: '360px',
                border: 'none',
                borderRadius: '10px'
              }}
            ></iframe>
          </div>
        )}
      </section>

    


        <section className="section featured-content">
  <h2>Featured Content</h2>
  <div className="cards">

    <div className="card" onClick={() => alert('Explore Courses')}>
      <img src= "/images/course.png" 
      alt="Courses" />
      <div className="card-title">Courses</div>
    </div>

    <div className="card" onClick={() => alert('See Upcoming Events')}>
      <img src="/images/events.png"  
      alt="Events" />
      <div className="card-title">Events</div>
    </div>

    <Link href="/hub">
  <div className="card">
    <img
      src="/images/community.png"
      alt="Community"
    />
    <div className="card-title">Community</div>
  </div>
</Link>
    <div className="card" onClick={() => alert('Check Out Blogs')}>
      <img src="/images/blog.png" alt="Blog" />
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

        <section className="newsletter" id="newsletter">
          <h2>Subscribe for Inspiration</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert("✨ Thanks for joining the Light Heart Vision!"); }}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        <footer className="footer" id="contact">
          <p>&copy; 2025 Light Heart Vision. All rights reserved.</p>
        </footer>

        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      </div>
    );  
  }
