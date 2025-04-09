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
    },
  ];

  return (
    <div className="hub-wrapper">
      {/* Header */}
      <div className="hub-topbar">
        <div className="hub-brand">🌱 Community</div>
        <div className="hub-nav-icons">
          <span className="hub-login">Log In</span>
          <span className="hub-menu">☰</span>
        </div>
      </div>

      {/* Hero */}
      <header className="hub-header">
        <h1>Community Hub</h1>
        <p className="hub-subtitle">Search. Share. Support.</p>
      </header>

      {/* Breadcrumb */}
      <div className="hub-breadcrumb">
        <span>You are here → </span>
        <Link href="/" className="hub-link">Home</Link>
        <span> / Community Hub</span>
      </div>

      {/* Tabs */}
      <section className="hub-buttons">
        <button className="active">❓ FAQs</button>
        <button className="disabled" disabled>Help Categories</button>
      </section>

      {/* Interactive Cards */}
      <section className="hub-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="hub-card interactive">
            <div className="hub-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p className="hub-desc">{cat.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
