  'use client';

  import { useState, useEffect } from 'react';

  export default function Home() {
    const [videoVisible, setVideoVisible] = useState(false);

    const showVideo = () => {
      setVideoVisible(true);
    };

    useEffect(() => {
      const sections = document.querySelectorAll('.section');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.5, // Trigger animation when 50% of the section is in view
      });
  
      sections.forEach((section) => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
      });
  
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);

    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><a href="/hub">Community</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <h1>Awaken Wonder. Inspire Change…</h1>
          <p>Connect ~ Community ~ Co-Creation</p>
          <a className="cta-button" >Join the Vision</a>
        </section>

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
                style={{ width: '90%', maxWidth: '640px', height: '360px', border: 'none', borderRadius: '10px' }}
              ></iframe>
            </div>
          )}
        </section>

        <section className="section featured-content">
  <h2>Featured Content</h2>
  <div className="cards">
    <div className="card" onClick={() => alert('Explore Courses')}>
      <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDJ8fGJvb2slMjBzdGFjayUyMG9uJTIwd2hpdGUtdGFibGV8ZW58MHx8fHwxNjE4NzQ0Nzg4&ixlib=rb-1.2.1&q=80&w=400" alt="Courses" />
      <div className="card-title">Courses</div>
    </div>
    <div className="card" onClick={() => alert('See Upcoming Events')}>
      <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80" alt="Events" />
      <div className="card-title">Events</div>
    </div>
    <div className="card" onClick={() => alert('Meet the Community')}>
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" alt="Community" />
      <div className="card-title">Community</div>
    </div>
    <div className="card" onClick={() => alert('Check Out Blogs')}>
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" alt="Blog" />
      <div className="card-title">Blog</div>
    </div>
  </div>
</section>


        <section className="section" id="community">
          <h2>Explore Our Universe</h2>
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
