'use client';
import './mindful-living.css';
import Link from 'next/link';

export default function MindfulLiving() {
  return (
    <div className="mindful-wrapper">
      {/* Navigation Bar */}
      <nav className="hub-nav-bar">
        <div className="hub-nav-inner">
          <ul className="hub-nav-center">
            <li><Link href="/hub">Community</Link></li>
            <li><a href="#courses">Courses</a></li>
            <li><Link href="/aboutUs">About</Link></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="hub-nav-right">
            <Link href="/signin">
              <button className="hub-signIn">
                <span className="icon">👤</span>
                <span className="label">Sign In</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div className="mindful-header">
        <h1>Mindful Living</h1>
      </div>

      {/* Breadcrumb */}
      <div className="hub-breadcrumb">
        You are here → <Link href="/" className="hub-link">Home</Link> / <Link href="/hub" className="hub-link">Community Hub</Link> / Mindful Living
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
        <p>Meditation is a practice that helps you stay present, calm your mind, and reduce stress. It's a journey of peace and self-awareness.</p>
        <Link href="https://www.mindful.org/how-to-meditate/" target="_blank" className="meditation-link">
          Learn how to meditate here →
        </Link>
      </div>
    </div>
  );
}
