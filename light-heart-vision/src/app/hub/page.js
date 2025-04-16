'use client';
import './hub.css';
import Link from 'next/link';

export default function Hub() {
  const categories = [
    {
      icon: '🌟',
      title: 'Vision Board',
      desc: 'Share your dreams and intentions with a like-minded community.',
    },
    {
      icon: '🗓️',
      title: 'Events',
      desc: 'Explore upcoming virtual and in-person gatherings.',
    },
    {
      icon: '📚',
      title: 'Community Resources',
      desc: 'Find guides, tools, and content shared by members.',
    },
    {
      icon: '🧘‍♀️',
      title: 'Mindful Living',
      desc: 'Discover practices for peace, wellness, and connection.',
      href: '/hub/mindful-living',  // This is important
    },
  ];

  return (
    <div className="hub-wrapper">
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

      {/* Title */}
      <div className="hub-header">
        <h1>Community Hub</h1>
        <p className="hub-subtitle">Search. Share. Support.</p>
      </div>

      {/* Breadcrumb */}
      <div className="hub-breadcrumb">
        You are here → <Link href="/" className="hub-link">Home</Link> / Community Hub
      </div>

      {/* Search */}
      <div className="hub-search-container">
        <input type="text" placeholder="Search all content" />
        <button>🔍</button>
      </div>

      {/* Tabs */}
      <section className="hub-buttons">
        <button className="active">❓ FAQs</button>
        <button className="secondary">📂 Help Categories</button>
      </section>

      {/* Cards */}
      <section className="hub-grid">
        {categories.map((cat, idx) => (
          <Link key={idx} href={cat.href || '#'} className="hub-card-link">
            <div className="hub-card">
              <div className="hub-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p className="hub-desc">{cat.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
